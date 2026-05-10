# Gemflix

Gemflix is a Netflix-inspired movie discovery app powered by React, TMDB, Firebase Authentication, Redux Toolkit, Tailwind CSS, and Gemini recommendations.

## Live Demo

[gem-flix-vert.vercel.app](https://gem-flix-vert.vercel.app)

## What I Built

- Firebase email/password authentication with sign up, sign in, sign out, and protected routing
- Browse page with a Netflix-style hero section, trailer background, and movie title overlay
- TMDB-powered movie rows for now playing, popular, top rated, and upcoming movies
- Reusable movie cards, movie lists, shimmer loading UI, header, footer, and layout components
- Gemini-powered movie recommendation search from natural-language prompts
- TMDB search integration to display recommended movie results
- Multi-language search labels for English and Hindi
- Centralized app state using Redux Toolkit slices for user, movies, search, and config data
- Custom hooks for fetching movie categories and trailers
- Responsive UI with Tailwind CSS
- Production deployment setup for Vercel, with Firebase Hosting config also included

## Tech Stack

- React with functional components and hooks
- React Router
- Redux Toolkit and React Redux
- Tailwind CSS
- Firebase Authentication and Analytics
- TMDB API
- Google Gemini API
- YouTube iframe trailers
- Vercel deployment

## Project Structure

```text
src/
  components/   UI components, pages, shimmer states, and layout pieces
  hooks/        Custom TMDB data-fetching hooks
  utils/        Firebase, Redux store/slices, constants, validation, and API helpers
```

## Getting Started

```bash
npm install
npm start
```

Create a `.env` file in the project root:

```bash
REACT_APP_TMDB_TOKEN=your_tmdb_v4_access_token
REACT_APP_GEMINI_KEY=your_gemini_api_key
```

Build for production:

```bash
npm run build
```

## Notes

Add your deployed domain to Firebase Authentication's authorized domains before using the production app. Keep real API keys out of Git and use `.env.example` as the template.

Create React App exposes `REACT_APP_*` values in the browser bundle, so production apps should eventually move unrestricted API calls behind a backend or serverless function.
