import fs from 'fs';
import path from 'path';

const SITEMAP_PATH = path.resolve(process.cwd(), 'public/sitemap.xml');
const ROBOTS_PATH = path.resolve(process.cwd(), 'public/robots.txt');
const BASE_ORIGIN = 'http://localhost:3005';
const PRODUCTION_ORIGIN = 'https://www.bizdevelopment.in';

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
      const title = titleMatch ? titleMatch[1].trim() : '';

      // Check Description
      const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
      const description = descMatch ? descMatch[1].trim() : '';

      // Check H1 count
      const h1Matches = html.match(/<h1[\s>]/gi) || [];
      const h1Count = h1Matches.length;

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
    console.log('✅ All titles and meta descriptions are 100% UNIQUE across all sitemap pages.');
  }

  if (allPassed && duplicateTitles === 0) {
    console.log('\n🎉 ALL SITEMAP VERIFICATION CHECKS PASSED PERFECTLY!');
  } else {
    console.log('\n⚠️ Some verification checks require attention.');
  }
}

verifyAll();
