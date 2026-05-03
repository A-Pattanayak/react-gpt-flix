# React GPT Flix

A Netflix-inspired movie browsing app built with React, Firebase Authentication, Redux Toolkit, Tailwind CSS, TMDB, and Gemini-powered movie recommendations.

## Features

- Email/password signup and sign in with Firebase Authentication
- Auth-aware routing between login and browse pages
- Netflix-style browse page with hero trailer playback
- Movie rows for now playing, popular, top rated, and upcoming titles
- TMDB-backed movie search results
- Gemini-powered recommendations from a natural-language prompt
- Multilingual search UI labels for English and Hindi
- Redux Toolkit state management for user, movie, search, and app config data
- Responsive Tailwind CSS styling

## Tech Stack

- React and Create React App
- React Router
- Redux Toolkit and React Redux
- Tailwind CSS
- Firebase Authentication and Analytics
- TMDB API
- Google Gemini API
- YouTube iframe trailers

## Getting Started

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root and add your API keys:

```bash
REACT_APP_TMDB_TOKEN=your_tmdb_v4_access_token
REACT_APP_GEMINI_KEY=your_gemini_api_key
```

Start the development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm test
```

If PowerShell blocks `npm`, run the same commands with `npm.cmd`, for example:

```bash
npm.cmd run build
```

## Project Structure

```text
src/
  components/   React UI components and pages
  hooks/        TMDB data-fetching hooks
  utils/        Firebase, Redux slices, constants, API helpers, and validation
```

## Firebase

The app is configured for Firebase Authentication and Analytics. Update `src/utils/Firebase.js` if you want to connect it to a different Firebase project.

## Available Scripts

- `npm start` starts the local development server.
- `npm run build` creates a production build in `build/`.
- `npm test` runs the test watcher.
- `npm run eject` ejects Create React App configuration.

## Deployment

The repository includes Firebase configuration files, so the production build can be deployed with Firebase Hosting after installing and authenticating the Firebase CLI.
