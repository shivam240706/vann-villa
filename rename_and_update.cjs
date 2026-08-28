const fs = require('fs');
const path = require('path');

const renameMap = {
  'bedroom2(1)': 'kudrat-villa-family-suite-bedroom',
  'bedroom2(3)': 'kudrat-villa-master-bedroom-view',
  'bedroom2': 'kudrat-villa-spacious-bedroom',
  'bedroom1': 'kudrat-villa-master-bedroom',
  'swimming pool(1)': 'kudrat-villa-private-pool',
  'swimming pool(2)': 'kudrat-villa-pool-nature',
  'fire pit': 'kudrat-villa-outdoor-fire-pit',
  'kudrat villa(1)': 'kudrat-villa-exterior',
  'kudrat villa(2)': 'kudrat-villa-lawn-view',
  'kudrat villa(3)': 'kudrat-villa-estate',
  'kudrat villa(4)': 'kudrat-villa-exterior-lawn',
  'kudrat villa(5)': 'kudrat-villa-front-view',
  'outside sitting area(2)': 'kudrat-villa-morning-tea-spot',
  'outside sitting area': 'kudrat-villa-outdoor-seating',
  'main enterance': 'kudrat-villa-grand-entrance',
  'mini bar': 'kudrat-villa-mini-bar',
  'open shower': 'kudrat-villa-open-shower',
  'roof view': 'kudrat-villa-rooftop-view',
  'sitting area': 'kudrat-villa-indoor-lounge',
  'Kitchen': 'kudrat-villa-kitchen',
};

const imageDir = path.join(__dirname, 'public', 'images');
const srcDir = path.join(__dirname, 'src');
const publicDir = path.join(__dirname, 'public');

// 1. Rename files in public/images/
console.log('Renaming files in public/images/...');
if (fs.existsSync(imageDir)) {
  const files = fs.readdirSync(imageDir);
  // Sort files so that longer names are replaced first if there are overlaps, though map handles it mostly.
  for (const file of files) {
    let newFileName = file;
    // We must check from longest keys to shortest to avoid partial replacements (e.g. bedroom2 vs bedroom2(1))
    const sortedKeys = Object.keys(renameMap).sort((a, b) => b.length - a.length);
    for (const oldName of sortedKeys) {
      const newName = renameMap[oldName];
      if (file.startsWith(oldName + '.') || file === oldName + '.webp' || file === oldName + '.jpg' || file === oldName + '.mp4' || file === oldName + '.HEIC' || file === oldName + ' (1).HEIC') {
        newFileName = file.replace(oldName, newName);
        break; // Stop after first match
      }
    }
    if (newFileName !== file) {
      // Fix edge case if there's a space before extension like ' (1).HEIC'
      newFileName = newFileName.replace(' (1).', '.');
      fs.renameSync(path.join(imageDir, file), path.join(imageDir, newFileName));
      console.log(`Renamed: ${file} -> ${newFileName}`);
    }
  }
}

// 2. Search and replace in code
console.log('Updating references in code...');

function updateFilesInDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const itemPath = path.join(dir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      if (item !== 'images' && item !== 'node_modules') updateFilesInDirectory(itemPath);
    } else {
      if (itemPath.endsWith('.jsx') || itemPath.endsWith('.js') || itemPath.endsWith('.html') || itemPath.endsWith('.json')) {
        let content = fs.readFileSync(itemPath, 'utf8');
        let updated = false;
        
        const sortedKeys = Object.keys(renameMap).sort((a, b) => b.length - a.length);
        for (const oldName of sortedKeys) {
          const newName = renameMap[oldName];
          const encodedStr = encodeURIComponent(oldName).replace(/%20/g, '%20');
          const encodedStr2 = oldName.replace(/ /g, '%20');
          
          if (content.includes(oldName)) {
            content = content.split(oldName).join(newName);
            updated = true;
          }
          if (content.includes(encodedStr)) {
            content = content.split(encodedStr).join(newName);
            updated = true;
          }
          if (content.includes(encodedStr2)) {
            content = content.split(encodedStr2).join(newName);
            updated = true;
          }
        }
        
        if (updated) {
          fs.writeFileSync(itemPath, content, 'utf8');
          console.log(`Updated references in: ${itemPath}`);
        }
      }
    }
  }
}

updateFilesInDirectory(srcDir);
updateFilesInDirectory(publicDir);

console.log('Done!');
