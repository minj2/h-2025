import '../src/index.css';

let designTokens = {};
try {
  designTokens = require('../src/tokens/design-tokens.json');
} catch (error) {
  console.warn('Design tokens file not found. Using default tokens.');
  designTokens = {
    colors: {},
    typography: {},
    spacing: {},
  };
}

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    designTokens: designTokens,
  },
};

export default preview;