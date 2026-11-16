import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const SITEMAP_PATH = path.resolve(process.cwd(), 'public/sitemap.xml');

const SITEMAP_ENTRIES = [
  { loc: 'https://www.bizdevelopment.in', file: 'src/app/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/services', file: 'src/app/services/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/work', file: 'src/app/work/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/about', file: 'src/app/about/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/contact', file: 'src/app/contact/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/services/website-development-nagpur', file: 'src/app/services/website-development-nagpur/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/services/ecommerce-website-development-nagpur', file: 'src/app/services/ecommerce-website-development-nagpur/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/services/mobile-app-development-nagpur', file: 'src/app/services/mobile-app-development-nagpur/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/services/ui-ux-design-nagpur', file: 'src/app/services/ui-ux-design-nagpur/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/services/nextjs-development', file: 'src/app/services/nextjs-development/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/work/miraya', file: 'src/app/work/[slug]/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/work/suko', file: 'src/app/work/[slug]/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/work/rajwadi', file: 'src/app/work/[slug]/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/work/asma', file: 'src/app/work/[slug]/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/work/binous', file: 'src/app/work/[slug]/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/work/shutter-school', file: 'src/app/work/[slug]/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/work/chemora', file: 'src/app/work/[slug]/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/work/urban-taxi', file: 'src/app/work/[slug]/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/work/art-interiorz', file: 'src/app/work/[slug]/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/work/mysa', file: 'src/app/work/[slug]/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/work/wealth-acumen', file: 'src/app/work/[slug]/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/work/oswal-jewellers', file: 'src/app/work/[slug]/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/work/taubys', file: 'src/app/work/[slug]/page.tsx' },
  { loc: 'https://www.bizdevelopment.in/work/mmm-hotels', file: 'src/app/work/[slug]/page.tsx' },
];

export function generateSitemapXml() {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  for (const entry of SITEMAP_ENTRIES) {
    let date = '2026-10-22';
    try {
      const output = execSync(`git log -1 --format=%cs -- "${entry.file}"`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
      if (output && /^\d{4}-\d{2}-\d{2}$/.test(output)) {
        date = output;
      }
    } catch {
      // fallback
    }

    lines.push('  <url>');
    lines.push(`    <loc>${entry.loc}</loc>`);
    lines.push(`    <lastmod>${date}</lastmod>`);
    lines.push('  </url>');
  }

  lines.push('</urlset>');
  return lines.join('\n') + '\n';
}

const xml = generateSitemapXml();
fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
console.log(`✅ Successfully generated ${SITEMAP_PATH} with ${SITEMAP_ENTRIES.length} URLs.`);

