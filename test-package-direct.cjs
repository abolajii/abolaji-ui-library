// Direct test of the published package
const fs = require('fs');
const path = require('path');

console.log('🔍 Testing abolaji-ui-library@1.0.8...\n');

// Check if package exists
const packagePath = path.join(__dirname, 'node_modules/abolaji-ui-library');
if (!fs.existsSync(packagePath)) {
  console.log('❌ Package not found!');
  process.exit(1);
}

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(path.join(packagePath, 'package.json'), 'utf8'));
console.log('📦 Package version:', packageJson.version);

// Check dist files
const distPath = path.join(packagePath, 'dist');
const distFiles = fs.readdirSync(distPath);
console.log('📁 Dist files:', distFiles.filter(f => f.endsWith('.js')).length, 'JS files');

// Read main index.js
const indexPath = path.join(distPath, 'index.js');
const indexContent = fs.readFileSync(indexPath, 'utf8');

console.log('\n🔎 Analyzing bundle:');
console.log('   File size:', Math.round(indexContent.length / 1024), 'KB');

// Check for auto-injection components
const checks = [
  ['CSS embedded', /\/\* Abolaji UI Components.*Comprehensive Auto-injected Styles \*\//],
  ['Style element creation', /createElement.*style/i],
  ['Style ID usage', /abolaji-ui-styles/],
  ['Document check', /document.*getElementById/],
  ['CSS variable', /comprehensiveCSS|const.*=.*`/],
  ['Console logging', /console\.log.*auto-inject/i],
  ['Window check', /typeof.*window/]
];

checks.forEach(([name, regex]) => {
  const found = regex.test(indexContent);
  console.log(`   ${found ? '✅' : '❌'} ${name}: ${found ? 'FOUND' : 'NOT FOUND'}`);
});

// Look for the actual CSS content
const cssStart = indexContent.indexOf('/* Abolaji UI Components');
if (cssStart !== -1) {
  const cssEnd = indexContent.indexOf('`;', cssStart);
  const cssLength = cssEnd - cssStart;
  console.log(`\n🎨 CSS found: ${Math.round(cssLength / 1024)}KB embedded`);
  
  // Show sample
  const sample = indexContent.slice(cssStart, cssStart + 150);
  console.log('   Sample:', sample.replace(/\n/g, ' ') + '...');
} else {
  console.log('\n❌ No CSS found in bundle');
}

// Check for module-level execution
const moduleExecPattern = /typeof window.*undefined.*injectStyles/;
if (moduleExecPattern.test(indexContent)) {
  console.log('\n✅ Module-level auto-injection found');
} else {
  console.log('\n❌ Module-level auto-injection NOT found');
}

console.log('\n📋 Summary:');
const hasCSS = indexContent.includes('Comprehensive Auto-injected Styles');
const hasInjection = indexContent.includes('abolaji-ui-styles');
const hasExecution = indexContent.includes('typeof window');

if (hasCSS && hasInjection && hasExecution) {
  console.log('✅ AUTO-INJECTION SHOULD WORK - All components present');
} else {
  console.log('❌ AUTO-INJECTION MISSING COMPONENTS:');
  if (!hasCSS) console.log('   - CSS not embedded');
  if (!hasInjection) console.log('   - Injection logic missing');
  if (!hasExecution) console.log('   - Module execution missing');
}
