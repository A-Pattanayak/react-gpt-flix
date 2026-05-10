# Gemflix

Netflix-inspired movie discovery with Gemini-powered recommendations.

Gemflix combines Firebase auth, TMDB movie data, trailer previews, multilingual search labels, and AI recommendations into a responsive React experience.

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-gem--flix--vert.vercel.app-E50914?style=for-the-badge&logo=vercel&logoColor=white)](https://gem-flix-vert.vercel.app)

---

## Tech Stack

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=111111)
![Redux](https://img.shields.io/badge/State-Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind](https://img.shields.io/badge/Styling-Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Firebase](https://img.shields.io/badge/Auth-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=111111)
![Gemini](https://img.shields.io/badge/AI-Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)
![TMDB](https://img.shields.io/badge/API-TMDB-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## Features

- Firebase sign up, sign in, sign out, and protected routing
- Netflix-style browse page with hero trailer playback
- TMDB movie rows for now playing, popular, top rated, and upcoming titles
- Gemini-powered movie recommendations from natural-language prompts
- TMDB search results for AI-suggested movies
- Multilingual search labels for English and Hindi
- Redux Toolkit slices for user, movie, search, and config state
- Custom hooks for movie categories and trailer fetching
- Reusable components with shimmer loading states
- Responsive Tailwind CSS UI

---

## Architecture

```text
src/
  components/   UI components, pages, layout, cards, and shimmer states
  hooks/        Custom hooks for TMDB data and trailers
  utils/        Firebase, Redux store/slices, constants, validation, APIs
```

---

## Run Locally

```bash
npm install
npm start
```

Create a `.env` file:

```bash
REACT_APP_TMDB_TOKEN=your_tmdb_v4_access_token
REACT_APP_GEMINI_KEY=your_gemini_api_key
```

Build for production:

```bash
npm run build
```

---

## Deployment Notes

Add your deployed domain to Firebase Authentication's authorized domains and keep real API keys out of Git. Since Create React App exposes `REACT_APP_*` values in the browser bundle, unrestricted production API calls should eventually move behind a backend or serverless function.
