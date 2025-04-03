require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Figma API를 사용하여 디자인 토큰을 가져오는 함수
async function fetchFigmaTokens(fileKey, accessToken) {
  if (!fileKey || !accessToken) {
    throw new Error('Figma credentials are missing. Please check your .env.local file.');
  }
  
  console.log('Using Figma credentials:', { fileKey, accessToken: accessToken.slice(0, 5) + '...' });
  
  const response = await fetch(`https://api.figma.com/v1/files/${fileKey}`, {
    headers: {
      'X-Figma-Token': accessToken
    }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch Figma data: ${response.statusText}`);
  }
  
  return response.json();
}

// 디자인 토큰을 Storybook 형식으로 변환
function transformTokens(figmaData) {
  const tokens = {
    colors: {},
    typography: {},
    spacing: {},
    // 기타 필요한 토큰들
  };

  // Figma 데이터에서 스타일 추출
  if (figmaData.styles) {
    Object.entries(figmaData.styles).forEach(([key, style]) => {
      if (style.styleType === 'FILL') {
        tokens.colors[key] = style.description || key;
      } else if (style.styleType === 'TEXT') {
        tokens.typography[key] = style.description || key;
      }
    });
  }

  return tokens;
}

// 메인 함수
async function main() {
  const fileKey = process.env.FIGMA_FILE_ID;
  const accessToken = process.env.FIGMA_API_KEY;

  try {
    console.log('Fetching Figma data...');
    const figmaData = await fetchFigmaTokens(fileKey, accessToken);
    console.log('Transforming tokens...');
    const transformedTokens = transformTokens(figmaData);
    
    // tokens 디렉토리가 없으면 생성
    const tokensDir = path.join(__dirname, '../src/tokens');
    if (!fs.existsSync(tokensDir)) {
      fs.mkdirSync(tokensDir, { recursive: true });
    }
    
    // 토큰을 파일로 저장
    const tokensPath = path.join(tokensDir, 'design-tokens.json');
    fs.writeFileSync(tokensPath, JSON.stringify(transformedTokens, null, 2));
    
    console.log('Successfully exported Figma tokens to:', tokensPath);
  } catch (error) {
    console.error('Error exporting Figma tokens:', error.message);
    process.exit(1);
  }
}

main().catch(console.error); 