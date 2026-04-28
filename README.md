# Movie Website

A Netflix-inspired movie browsing web app built with React, Tailwind CSS, Firebase Authentication, Redux Toolkit, and TMDB APIs.

This README is being used as a simple progress log for the project. It explains what has been built so far and what is planned next.

## Tech Stack

- React
- React Router
- Redux Toolkit
- React Redux
- Tailwind CSS
- Firebase Authentication
- TMDB API
- YouTube embed player for trailer background videos

## Features Built So Far

### Project Setup

- Created the app using Create React App.
- Added Tailwind CSS for styling.
- Created folders for components, hooks, and utilities.
- Set up reusable constants inside the utility files.

### Routing

- Added routing with `react-router-dom`.
- `/` shows the login/signup page.
- `/browse` shows the main movie browsing page.

### Firebase Authentication

- Connected Firebase to the app.
- Added sign up with email, password, name, and profile image.
- Added sign in with email and password.
- Added sign out from the browse page header.
- Used `onAuthStateChanged` to keep track of login state.
- Redirects logged-in users to `/browse`.
- Redirects logged-out users to `/`.

### Form Validation

- Created a `Validate` utility.
- Added validation for email.
- Added validation for password.
- Added validation for full name during signup.
- Shows validation and Firebase error messages on the form.

### Redux Store

- Configured Redux Toolkit store in `appStore.js`.
- Created `userSlice` for logged-in user data.
- Created `movieSlice` for movie data and trailer data.
- Connected Redux to the app using `Provider`.

### Movie API Hooks

Created custom hooks to fetch movie data from TMDB:

- `useNowPlaying`
- `usePopularMovies`
- `useTopRatedMovies`
- `useUpcomingMovies`
- `useTrailer`

The movie lists are stored in Redux so different components can use the same data.

### Browse Page

- Created the main `Browse` page.
- Added the `Header`.
- Added the `MainContainer` for the hero section.
- Added the `SecondaryContainer` for movie rows.
- Fetches now playing, popular, top rated, and upcoming movies when the browse page loads.

### Header

- Shows the Netflix logo.
- Shows the user's profile image after login.
- Has a sign out button.
- Uses a dark transparent gradient so it fits over the hero video.

### Main Hero Section

- Uses the first now playing movie as the featured movie.
- Shows the movie title and overview.
- Shows `Play` and `More Info` buttons.
- Fetches a trailer for the featured movie.
- Plays the trailer in the background using a YouTube iframe.

### Movie Rows

- Created `MovieList` component for horizontal rows.
- Created `MovieCard` component for movie posters.
- Added rows for:
  - Now Playing
  - Popular
  - Top Rated
  - Upcoming
- Added horizontal scrolling for movie rows.
- Hid the scrollbar to make the rows look cleaner.
- Added spacing between posters.
- Added a Netflix-style overlap effect where the movie rows move upward near the hero section.

## Current Project Status

- Authentication is working.
- Login and signup UI are built.
- Redux store is connected.
- TMDB movie data is being fetched.
- Main hero section is working with title, overview, and video background.
- Secondary movie rows are displayed for multiple categories.
- Basic Netflix-like styling is in place.

## Planned Next Updates

- Improve responsive design for mobile screens.
- Add better loading states before movie data arrives.
- Add fallback UI if trailer or poster data is missing.
- Add different movie categories with cleaner labels.
- Improve hover effects on movie cards.
- Add GPT-powered movie search or recommendations later.
- Clean up repeated code in API hooks.

## Run The Project

```bash
npm start
```

## Build The Project

```bash
npm run build
```

If PowerShell blocks `npm`, use:

```bash
npm.cmd run build
```

## Note

This project is still in progress. The README will continue to change as more features are added.
