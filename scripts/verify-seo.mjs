import fs from 'fs';
import path from 'path';

const SITEMAP_PATH = path.resolve(process.cwd(), 'public/sitemap.xml');
const ROBOTS_PATH = path.resolve(process.cwd(), 'public/robots.txt');
const BASE_ORIGIN = process.env.BASE_ORIGIN || (process.env.PORT ? `http://localhost:${process.env.PORT}` : 'http://localhost:3005');
const PRODUCTION_ORIGIN = 'https://www.bizdevelopment.in';

function decodeHtml(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'");
}

async function verifyAll() {
  console.log('🔍 Starting comprehensive SEO & URL audit against production build...\n');

  // 1. Verify robots.txt
  const robotsContent = fs.readFileSync(ROBOTS_PATH, 'utf8');
  const hasCorrectSitemap = robotsContent.includes(`Sitemap: ${PRODUCTION_ORIGIN}/sitemap.xml`);
  const hasAllowAll = robotsContent.includes('Allow: /');
  console.log(`🤖 robots.txt:
  - Sitemap directive points to ${PRODUCTION_ORIGIN}/sitemap.xml: ${hasCorrectSitemap ? '✅ PASS' : '❌ FAIL'}
  - Allow: / directive present: ${hasAllowAll ? '✅ PASS' : '❌ FAIL'}\n`);

  // 2. Parse Sitemap
  const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const locRegex = /<loc>(https:\/\/www\.bizdevelopment\.in[^<]*)<\/loc>/g;
  const urls = [];
  let match;
  while ((match = locRegex.exec(sitemapXml)) !== null) {
    urls.push(match[1]);
  }

  console.log(`🗺️ Found ${urls.length} URLs in sitemap.xml to verify.\n`);

  const results = [];
  const titles = new Map();
  const descriptions = new Map();

  for (const fullUrl of urls) {
    const pathname = fullUrl.replace(PRODUCTION_ORIGIN, '') || '/';
    const localUrl = `${BASE_ORIGIN}${pathname}`;

    try {
      const res = await fetch(localUrl, {
        headers: {
          'host': 'www.bizdevelopment.in',
          'x-forwarded-proto': 'https',
        },
        redirect: 'manual',
      });

      const status = res.status;
      const html = await res.text();

      // Check canonical
      const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
                             html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
      const canonical = canonicalMatch ? canonicalMatch[1] : null;
      const canonicalMatches = canonical === fullUrl;

      // Check noindex
      const robotsMetaMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i);
      const robotsMeta = robotsMetaMatch ? robotsMetaMatch[1].toLowerCase() : '';
      const hasNoindex = robotsMeta.includes('noindex');

      // Check Title
      const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
      const title = decodeHtml(titleMatch ? titleMatch[1].trim() : '');

      // Check Description
      const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
      const description = decodeHtml(descMatch ? descMatch[1].trim() : '');

      // Check H1 count
      const h1Matches = html.match(/<h1[\s>]/gi) || [];
      const h1Count = h1Matches.length;

      // Extract all <a> hrefs
      const linkMatches = [...html.matchAll(/<a[^>]*href=["']([^"']*)["']/gi)].map((m) => m[1]);

      // Duplicate tracking
      if (titles.has(title)) {
        titles.get(title).push(fullUrl);
      } else {
        titles.set(title, [fullUrl]);
      }

      if (descriptions.has(description)) {
        descriptions.get(description).push(fullUrl);
      } else {
        descriptions.set(description, [fullUrl]);
      }

      results.push({
        url: fullUrl,
        path: pathname,
        status,
        canonical,
        canonicalMatches,
        hasNoindex,
        title,
        description,
        h1Count,
        links: linkMatches,
      });
    } catch (err) {
      results.push({
        url: fullUrl,
        path: pathname,
        status: `ERROR: ${err.message}`,
        canonical: null,
        canonicalMatches: false,
        hasNoindex: false,
        title: '',
        description: '',
        h1Count: 0,
      });
    }
  }

  // 3. Check Redirects
  console.log('🔄 Checking 301 Redirect Rules (bare domain, http, trailing slash)...');
  
  // Bare domain redirect
  const bareRes = await fetch(`${BASE_ORIGIN}/services/website-development-nagpur`, {
    headers: { 'host': 'bizdevelopment.in' },
    redirect: 'manual',
  });
  const bareRedirectLocation = bareRes.headers.get('location');
  const bareOk = bareRes.status === 301 || bareRes.status === 308;
  console.log(`  - Bare domain (bizdevelopment.in) -> ${bareRes.status} Location: ${bareRedirectLocation} [${bareOk ? '✅ PASS' : '❌ FAIL'}]`);

  // HTTP to HTTPS redirect
  const httpRes = await fetch(`${BASE_ORIGIN}/about`, {
    headers: {
      'host': 'www.bizdevelopment.in',
      'x-forwarded-proto': 'http',
    },
    redirect: 'manual',
  });
  const httpRedirectLocation = httpRes.headers.get('location');
  const httpOk = (httpRes.status === 301 || httpRes.status === 308) && httpRedirectLocation?.startsWith('https://');
  console.log(`  - HTTP request -> ${httpRes.status} Location: ${httpRedirectLocation} [${httpOk ? '✅ PASS' : '❌ FAIL'}]`);

  // Trailing slash redirect
  const slashRes = await fetch(`${BASE_ORIGIN}/services/`, {
    headers: {
      'host': 'www.bizdevelopment.in',
      'x-forwarded-proto': 'https',
    },
    redirect: 'manual',
  });
  const slashRedirectLocation = slashRes.headers.get('location');
  const slashOk = (slashRes.status === 301 || slashRes.status === 308) && !slashRedirectLocation?.endsWith('/');
  console.log(`  - Trailing slash (/services/) -> ${slashRes.status} Location: ${slashRedirectLocation} [${slashOk ? '✅ PASS' : '❌ FAIL'}]\n`);

  // 4. Output Summary Table
  console.log('📊 SITEMAP URL AUDIT RESULTS:');
  console.log('------------------------------------------------------------------------------------------------------------------------------------------');
  console.log(
    'URL Path'.padEnd(48) +
    'Status'.padEnd(10) +
    'Canonical'.padEnd(14) +
    'NoIndex'.padEnd(10) +
    'H1s'.padEnd(6) +
    'Title (truncated)'.padEnd(45)
  );
  console.log('------------------------------------------------------------------------------------------------------------------------------------------');

  let allPassed = true;

  for (const r of results) {
    const statusOk = r.status === 200;
    const canOk = r.canonicalMatches;
    const noIndexOk = !r.hasNoindex;
    const h1Ok = r.h1Count === 1;

    if (!statusOk || !canOk || !noIndexOk || !h1Ok) {
      allPassed = false;
    }

    console.log(
      r.path.padEnd(48) +
      String(r.status).padEnd(10) +
      (canOk ? '✅ MATCH' : '❌ MISMATCH').padEnd(14) +
      (noIndexOk ? '✅ NONE' : '❌ NOINDEX').padEnd(10) +
      (h1Ok ? '1' : `❌ ${r.h1Count}`).padEnd(6) +
      r.title.slice(0, 42).padEnd(45)
    );
  }

  console.log('------------------------------------------------------------------------------------------------------------------------------------------\n');

  // Check title & description uniqueness
  let duplicateTitles = 0;
  for (const [title, urlList] of titles.entries()) {
    if (urlList.length > 1) {
      duplicateTitles++;
      console.warn(`⚠️ Duplicate title found for ${urlList.length} URLs: "${title}"`);
      for (const u of urlList) console.warn(`   - ${u}`);
    }
  }

  let duplicateDescriptions = 0;
  for (const [desc, urlList] of descriptions.entries()) {
    if (urlList.length > 1) {
      duplicateDescriptions++;
      console.warn(`⚠️ Duplicate description found for ${urlList.length} URLs: "${desc}"`);
      for (const u of urlList) console.warn(`   - ${u}`);
    }
  }

  if (duplicateTitles === 0 && duplicateDescriptions === 0) {
    console.log('✅ All titles and meta descriptions are 100% UNIQUE across all sitemap pages.\n');
  }

  // 5. Case Study Title & Meta Description Audit (Length & Uniqueness)
  console.log('📚 Case Study Title & Meta Description Audit:');
  const caseStudies = results.filter((r) => r.path.startsWith('/work/'));
  let caseStudiesPassed = true;
  const caseStudyTitles = new Map();

  for (const cs of caseStudies) {
    const titleLen = cs.title.length;
    const descLen = cs.description.length;
    const tOk = titleLen >= 50 && titleLen <= 60;
    const dOk = descLen >= 140 && descLen <= 160;

    if (!tOk || !dOk) {
      caseStudiesPassed = false;
      allPassed = false;
    }

    if (caseStudyTitles.has(cs.title)) {
      caseStudyTitles.get(cs.title).push(cs.url);
    } else {
      caseStudyTitles.set(cs.title, [cs.url]);
    }

    console.log(
      `  - ${cs.path.padEnd(25)} Title: ${String(titleLen).padStart(2)} chars [${tOk ? '✅ PASS' : '❌ FAIL'}] | ` +
      `Desc: ${String(descLen).padStart(3)} chars [${dOk ? '✅ PASS' : '❌ FAIL'}]`
    );
  }

  let duplicateCaseStudyTitles = 0;
  for (const [t, list] of caseStudyTitles.entries()) {
    if (list.length > 1) {
      duplicateCaseStudyTitles++;
      caseStudiesPassed = false;
      allPassed = false;
      console.warn(`  ❌ Duplicate case study title found: "${t}" across ${list.join(', ')}`);
    }
  }

  if (caseStudies.length > 0 && duplicateCaseStudyTitles === 0 && caseStudiesPassed) {
    console.log(`\n  ✅ All ${caseStudies.length} case study titles (50-60 chars) and meta descriptions (140-160 chars) are 100% compliant and unique.\n`);
  } else if (caseStudies.length > 0) {
    console.warn(`\n  ⚠️ Some case studies failed title/description length or uniqueness checks.\n`);
  }

  // 6. Hierarchy Link Audit (Services <-> Case Studies)
  console.log('🔗 Hierarchy Link Audit (Services <-> Case Studies):');
  const { PORTFOLIO_PROJECTS } = await import('../src/data/portfolio.ts');

  let hierarchyPassed = true;
  const serviceRoutes = [
    '/services/website-development-nagpur',
    '/services/ecommerce-website-development-nagpur',
    '/services/mobile-app-development-nagpur',
    '/services/ui-ux-design-nagpur',
    '/services/nextjs-development',
  ];

  for (const sRoute of serviceRoutes) {
    const pageResult = results.find((r) => r.path === sRoute);
    const mappedCases = PORTFOLIO_PROJECTS.filter(
      (p) => p.hasLiveDomain && p.primaryService?.href === sRoute
    );

    if (!pageResult) {
      console.warn(`  ⚠️ Service page ${sRoute} not found in crawl results.`);
      continue;
    }

    const pageLinks = new Set(pageResult.links || []);
    const missingCases = [];
    for (const cs of mappedCases) {
      const expectedHref = `/work/${cs.slug}`;
      if (!pageLinks.has(expectedHref)) {
        missingCases.push(expectedHref);
      }
    }

    const ok = missingCases.length === 0;
    if (!ok) {
      hierarchyPassed = false;
      allPassed = false;
    }
    console.log(
      `  - Service ${sRoute.padEnd(46)} -> links to ${String(mappedCases.length).padStart(2)} mapped case studies [${ok ? '✅ PASS' : `❌ MISSING: ${missingCases.join(', ')}`}]`
    );
  }

  // 7. Case Study -> Parent Service Backlink Audit
  console.log('\n🔗 Case Study -> Parent Service Backlink Audit:');
  const mappedCaseStudies = PORTFOLIO_PROJECTS.filter((p) => p.hasLiveDomain && p.primaryService?.href);

  for (const cs of mappedCaseStudies) {
    const csPath = `/work/${cs.slug}`;
    const pageResult = results.find((r) => r.path === csPath);
    if (!pageResult) continue;

    const pageLinks = new Set(pageResult.links || []);
    const targetService = cs.primaryService.href;
    const hasServiceLink = pageLinks.has(targetService);

    if (!hasServiceLink) {
      hierarchyPassed = false;
      allPassed = false;
    }

    console.log(
      `  - Case Study ${csPath.padEnd(25)} -> links to ${targetService.padEnd(46)} [${hasServiceLink ? '✅ PASS' : '❌ FAIL'}]`
    );
  }

  // 8. Broken Internal Links Audit (Non-Existent Routes)
  console.log('\n🚫 Broken Internal Links Audit (Non-Existent Routes):');
  const validRoutes = new Set([
    ...urls.map((u) => u.replace(PRODUCTION_ORIGIN, '') || '/'),
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookie-policy',
  ]);

  let brokenLinksCount = 0;
  const brokenLinksFound = [];

  for (const r of results) {
    for (const href of r.links || []) {
      if (href.startsWith('/') && !href.startsWith('//')) {
        const cleanPath = href.split(/[?#]/)[0] || '/';
        if (!validRoutes.has(cleanPath)) {
          brokenLinksCount++;
          brokenLinksFound.push({ source: r.path, target: cleanPath });
        }
      }
    }
  }

  if (brokenLinksCount === 0) {
    console.log('  ✅ Zero broken links to non-existent routes detected across all crawled pages.\n');
  } else {
    hierarchyPassed = false;
    allPassed = false;
    console.warn(`  ❌ Found ${brokenLinksCount} links to non-existent routes:`);
    for (const b of brokenLinksFound) {
      console.warn(`     - On ${b.source} -> ${b.target}`);
    }
    console.log('');
  }

  if (allPassed && duplicateTitles === 0 && caseStudiesPassed && hierarchyPassed) {
    console.log('🎉 ALL SITEMAP VERIFICATION CHECKS PASSED PERFECTLY!');
  } else {
    console.log('⚠️ Some verification checks require attention.');
  }
}

verifyAll();
