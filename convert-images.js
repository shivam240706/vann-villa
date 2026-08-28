import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'public', 'images');

fs.readdir(dir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (file.match(/\.(png|jpg|jpeg|heic)$/i)) {
      const ext = path.extname(file);
      const basename = path.basename(file, ext);
      const inputFile = path.join(dir, file);
      const outputFile = path.join(dir, `${basename}.webp`);
      
      // Skip if it already exists
      if (!fs.existsSync(outputFile)) {
        sharp(inputFile)
          .webp({ quality: 80 })
          .toFile(outputFile)
          .then(() => {
            console.log(`Converted ${file} to .webp`);
          })
          .catch(err => {
            console.error(`Error converting ${file}:`, err);
          });
      }
    }
  });
});
