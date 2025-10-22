const fs = require('fs');
const path = require('path');

console.log('Starting post-build copy process...');

// Copy index.html to root
if (fs.existsSync('dist/index.html')) {
  fs.copyFileSync('dist/index.html', 'index.html');
  console.log('✅ Copied index.html to root');
} else {
  console.log('❌ dist/index.html not found');
}

// Copy assets to root
if (fs.existsSync('dist/assets')) {
  if (!fs.existsSync('assets')) {
    fs.mkdirSync('assets');
  }
  
  const assets = fs.readdirSync('dist/assets');
  assets.forEach(file => {
    fs.copyFileSync(
      path.join('dist/assets', file), 
      path.join('assets', file)
    );
  });
  console.log(`✅ Copied ${assets.length} asset files to root`);
} else {
  console.log('❌ dist/assets folder not found');
}

console.log('Post-build copy process completed!');
