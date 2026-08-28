import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const htmlFile = path.join(distDir, 'index.html');

if (fs.existsSync(htmlFile)) {
  let html = fs.readFileSync(htmlFile, 'utf8');

  // Find all local script and link tags
  const scriptRegex = /<script[^>]*src="(\/assets\/[^"]+)"[^>]*><\/script>/g;
  const linkRegex = /<link[^>]*href="(\/assets\/[^"]+)"[^>]*rel="stylesheet"[^>]*>/g;

  const replaceWithSRI = (match, assetPath) => {
    const filePath = path.join(distDir, assetPath.replace(/^\//, ''));
    if (fs.existsSync(filePath)) {
      const fileBuffer = fs.readFileSync(filePath);
      const hash = crypto.createHash('sha384').update(fileBuffer).digest('base64');
      const integrity = `sha384-${hash}`;
      
      // Inject integrity and crossorigin
      return match.replace('<script ', `<script integrity="${integrity}" crossorigin="anonymous" `)
                  .replace('<link ', `<link integrity="${integrity}" crossorigin="anonymous" `);
    }
    return match;
  };

  html = html.replace(scriptRegex, replaceWithSRI);
  html = html.replace(linkRegex, replaceWithSRI);

  fs.writeFileSync(htmlFile, html);
  console.log('Successfully injected SRI hashes into dist/index.html');
} else {
  console.error('dist/index.html not found!');
}
