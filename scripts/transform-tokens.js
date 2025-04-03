const fs = require('fs');
const path = require('path');

// 디자인 토큰을 CSS 변수로 변환
function transformTokensToCSS(tokens) {
  let css = ':root {\n';
  
  // Colors
  Object.entries(tokens.colors).forEach(([key, value]) => {
    css += `  --color-${key.toLowerCase()}: ${value};\n`;
  });
  
  // Typography
  Object.entries(tokens.typography).forEach(([key, value]) => {
    css += `  --font-${key.toLowerCase()}: ${value};\n`;
  });
  
  // Spacing
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    css += `  --spacing-${key.toLowerCase()}: ${value};\n`;
  });
  
  css += '}\n';
  return css;
}

// 메인 함수
function main() {
  try {
    // 디자인 토큰 파일 읽기
    const tokensPath = path.join(__dirname, '../src/tokens/design-tokens.json');
    const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
    
    // CSS 변수로 변환
    const css = transformTokensToCSS(tokens);
    
    // CSS 파일 저장
    const cssPath = path.join(__dirname, '../src/tokens/design-tokens.css');
    fs.writeFileSync(cssPath, css);
    
    console.log('Successfully transformed design tokens to CSS variables!');
  } catch (error) {
    console.error('Error transforming design tokens:', error.message);
    process.exit(1);
  }
}

main(); 