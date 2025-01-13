const fs = require('fs');
const path = process.argv[2];

if (!path) {
  console.error('Usage: npm run touch <filename>');
  process.exit(1);
}

fs.closeSync(fs.openSync(path, 'w'));
console.log(`File '${path}' created or updated.`);
