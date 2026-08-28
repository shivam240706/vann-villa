const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer to the project directory
  // so that Vercel installs and finds the browser correctly during build.
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
