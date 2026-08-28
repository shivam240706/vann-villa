/**
 * CI guard: fails the build if any image in public/images/ exceeds 1 MB.
 * Prevents another swimming-pool-style bad conversion from silently shipping.
 *
 * Usage: node scripts/check-image-sizes.js
 */

const fs = require('fs');
const path = require('path');

const IMAGE_DIR = path.resolve(__dirname, '..', 'public', 'images');
const MAX_SIZE_BYTES = 1024 * 1024; // 1 MB
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.webp', '.png', '.gif']);

function walkDir(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(fullPath));
    } else if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      results.push(fullPath);
    }
  }
  return results;
}

const oversized = [];

for (const filePath of walkDir(IMAGE_DIR)) {
  const stat = fs.statSync(filePath);
  if (stat.size > MAX_SIZE_BYTES) {
    oversized.push({
      file: path.relative(IMAGE_DIR, filePath),
      sizeKB: Math.round(stat.size / 1024),
    });
  }
}

if (oversized.length > 0) {
  console.error('\n❌ OVERSIZED IMAGES DETECTED (threshold: 1 MB)\n');
  for (const { file, sizeKB } of oversized) {
    console.error(`  ${file} — ${sizeKB} KB`);
  }
  console.error(`\n${oversized.length} file(s) exceed the 1 MB threshold.`);
  console.error('Re-export these images at a lower quality or resolution before shipping.\n');
  process.exit(1);
} else {
  console.log('✅ All images are under 1 MB.');
  process.exit(0);
}
