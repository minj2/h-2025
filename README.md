# H-2025 Project

This project is built with React and Storybook for component development and documentation.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [your-repository-url]
cd h-2025
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
# Copy the example env file
cp .env.example .env.local

# Edit .env.local with your Figma credentials
```

4. Start the development server
```bash
npm start
# or
yarn start
```

5. Start Storybook
```bash
npm run storybook
# or
yarn storybook
```

## Project Structure

```
h-2025/
├── src/
│   ├── components/     # React components
│   ├── stories/       # Storybook stories
│   └── assets/        # Static assets
├── .storybook/        # Storybook configuration
└── public/            # Public files
```

## Figma Integration

This project is connected to Figma for design system and component specifications.

### Setting up Design Tokens

1. Copy the example tokens file:
```bash
cp src/tokens/design-tokens.example.json src/tokens/design-tokens.json
```

2. Set up your Figma credentials in `.env.local`:
   ```
   FIGMA_API_KEY=your_access_token
   FIGMA_FILE_ID=your_file_id
   ```

3. Export tokens from Figma:
```bash
npm run figma:export
```

Note: The actual design tokens file (`src/tokens/design-tokens.json`) is not committed to the repository for security reasons. Each developer needs to set up their own tokens file.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 