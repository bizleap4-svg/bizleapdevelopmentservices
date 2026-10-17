import fs from 'fs';
import path from 'path';

const FORBIDDEN_PATTERNS = [
  'TODO',
  'Owner Review',
  'Owner confirmation',
  'Owner review',
  'lorem ipsum',
];

const SCAN_DIRS = [
  path.resolve(process.cwd(), 'src/app'),
  path.resolve(process.cwd(), 'src/data'),
  path.resolve(process.cwd(), 'src/components'),
];

const EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.json', '.html']);

let violations = [];

function scanDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else if (entry.isFile() && EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const lines = content.split('\n');

      lines.forEach((line, index) => {
        for (const pattern of FORBIDDEN_PATTERNS) {
          // Check for pattern with word/case-sensitive or insensitive as appropriate
          if (line.includes(pattern)) {
            violations.push({
              file: path.relative(process.cwd(), fullPath),
              line: index + 1,
              pattern,
              snippet: line.trim(),
            });
          }
        }
      });
    }
  }
}

for (const dir of SCAN_DIRS) {
  scanDirectory(dir);
}

if (violations.length > 0) {
  console.error('\n🚨 [DRAFT CHECK FAILED] Forbidden draft strings found in production content:');
  for (const v of violations) {
    console.error(`  - ${v.file}:${v.line} [pattern: "${v.pattern}"]`);
    console.error(`    "${v.snippet}"`);
  }
  console.error(`\nTotal violations: ${violations.length}. Please remove draft text before building.\n`);
  process.exit(1);
} else {
  console.log('✅ [DRAFT CHECK PASSED] Zero draft text or TODO markers detected in application content.');
}
