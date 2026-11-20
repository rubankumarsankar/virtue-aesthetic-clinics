import fs from 'fs';
import path from 'path';

console.log('=== STARTING COMPREHENSIVE ASSET & CODE AUDIT ===\n');

// 1. Audit public images
const diskImages = new Set();
function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) walkDir(full);
    else {
      const rel = full.replace(/\\/g, '/');
      diskImages.add(rel);
    }
  }
}
walkDir('public/images');
console.log(`[Images on Disk]: Found ${diskImages.size} image files in public/images`);

// 2. Scan all tsx/ts files for /images/... references
const missingImages = [];
const allFoundImages = new Set();

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) scanDir(full);
    else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      const code = fs.readFileSync(full, 'utf8');
      const matches = code.matchAll(/['"](\/images\/[^'"]+)['"]/g);
      for (const m of matches) {
        const imagePath = 'public' + m[1];
        allFoundImages.add(m[1]);
        if (!fs.existsSync(imagePath)) {
          missingImages.push({ file: full.replace(/\\/g, '/'), image: m[1] });
        }
      }
    }
  }
}

scanDir('src');
scanDir('app');

console.log(`[Referenced Images]: Found ${allFoundImages.size} unique image references across components`);
if (missingImages.length === 0) {
  console.log('✓ PASS: All referenced image assets exist on disk!\n');
} else {
  console.error('✗ FAIL: Missing referenced images:');
  missingImages.forEach((m) => console.error(`  - ${m.image} in ${m.file}`));
  console.log('');
}

// 3. Scan for internal links
const internalLinks = new Set();
function scanLinks(dir) {
  if (!fs.existsSync(dir)) return;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) scanLinks(full);
    else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      const code = fs.readFileSync(full, 'utf8');
      const matches = code.matchAll(/href=['"](\/[^'"]*)['"]/g);
      for (const m of matches) {
        internalLinks.add(m[1]);
      }
    }
  }
}
scanLinks('src');
scanLinks('app');

console.log(`[Internal Links]: Found ${internalLinks.size} unique internal route destinations:`);
Array.from(internalLinks).sort().forEach((link) => console.log(`  - ${link}`));

console.log('\n=== AUDIT COMPLETE ===');

