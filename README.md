# React Dictionary App

A modern dictionary application that combines word definitions with visual representations by integrating with a dictionary API and the SheCodes Images API.

## Requirements

- Node.js 22 or newer
- npm

The required Node.js version is declared in `.nvmrc`, `package.json`, and
`netlify.toml` so local and Netlify builds use the same runtime.

## Development

Install dependencies and start the development server:

```bash
npm install
npm start
```

Run the tests once or create a production build with:

```bash
npm test -- --watchAll=false
npm run build
```

## Deployment

Netlify uses `npm run build` and publishes the `build` directory. Node.js 22 and
the root asset path (`PUBLIC_URL = "/"`) are configured in `netlify.toml`;
pushing to the connected GitHub repository triggers a new deployment.

The dictionary uses Dictionary API for definitions and the SheCodes Images API
for related photos. API failures are handled independently so a problem with
one service does not prevent the other result from rendering.

#### Features

* Word Definitions: Get comprehensive word meanings, parts of speech, and examples
* Phonetics: Display phonetic spelling and pronunciation
* Audio Pronunciation: Play audio of word pronunciation
* Visual Context: Show related images from the SheCodes Images API
* Responsive Design: Works on all device sizes
* Interactive UI: Clean interface with intuitive controls

#### Technologies Used

* React.js (v18.2.0) - Frontend framework
* Fetch - Browser HTTP client for API requests
* Font Awesome (v6.2.0) - Icon library
* Dictionary API - For word definitions and phonetics
* SheCodes Images API - For related word images
* React Hooks - State and effect management

## API Integration

### Dictionary API
* Fetches word definitions, phonetics, and pronunciation
* Returns structured data including:
  * Definitions
  * Examples
  * Phonetic text
  * Audio pronunciation

### SheCodes Images API
* Fetches high-quality images related to the searched word

#### Usage
* Enter a word in the search field
* Press Enter or click the search button
* View:
  * Word definitions and examples
  * Phonetic spelling
  * Pronunciation audio (click speaker icon)
  * Related images
  



