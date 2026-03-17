import fs from 'fs';

const tokens = JSON.parse(fs.readFileSync('./tokens/design-tokens.json', 'utf8'));

function flattenTokens(obj, prefix = '') {
  const result = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}-${key}` : key;
    
    if (value && typeof value === 'object' && 'value' in value) {
      result[newKey] = value.value;
    } else if (value && typeof value === 'object') {
      Object.assign(result, flattenTokens(value, newKey));
    }
  }
  
  return result;
}

function formatCssValue(value, key) {
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return `${value}px`;
  if (typeof value === 'object' && key.startsWith('shadow-')) {
    return `${value.x}px ${value.y}px ${value.blur}px ${value.spread}px ${value.color}`;
  }
  if (typeof value === 'object' && key.includes('lineHeight')) {
    return value;
  }
  return value;
}

const flattened = flattenTokens(tokens);

let css = ':root {\n';
for (const [key, value] of Object.entries(flattened)) {
  css += `  --${key}: ${formatCssValue(value, key)};\n`;
}
css += '}\n';

fs.mkdirSync('src/tokens', { recursive: true });
fs.writeFileSync('src/tokens/_variables.css', css);

console.log('Design tokens generated successfully!');
