# Movie Website

A Netflix-inspired movie browsing web app built with React, Tailwind CSS, Firebase Authentication, Redux Toolkit, and TMDB APIs.

This README is being maintained as a progress log of what has been implemented in the project so far. It will be updated further as more features are added.

## Tech Stack

- React
- React Router
- Redux Toolkit
- React Redux
- Tailwind CSS
- Firebase Authentication
- TMDB API

## Work Done Till Now

### 1. Project Setup

- Created the project using Create React App.
- Installed and configured Tailwind CSS for styling.
- Set up the basic folder structure for components, hooks, and utilities.

### 2. Routing Setup

- Configured routing using `react-router-dom`.
- Added the `/` route for the login page.
- Added the `/browse` route for the main movie browsing page.

### 3. Firebase Integration

- Connected the project with Firebase.
- Configured Firebase Authentication.
- Added Firebase Analytics setup for browser usage.

### 4. Authentication Features

- Built a combined Sign In and Sign Up form.
- Added toggle functionality between Sign In and Sign Up modes.
- Implemented user registration using Firebase Authentication.
- Implemented user login using Firebase Authentication.
- Added `updateProfile` to save user display name and profile image after signup.
- Implemented sign out functionality.
- Added auth state checking using `onAuthStateChanged`.
- Redirected authenticated users to `/browse`.
- Redirected unauthenticated users back to `/`.

### 5. Form Validation

- Created a custom `Validate` utility.
- Added validation for email format.
- Added validation for password strength.
- Added validation for full name during signup.
- Displayed validation and Firebase error messages on the form.

### 6. Redux Store Setup

- Configured a global Redux store using Redux Toolkit.
- Created `userSlice` to manage authenticated user data.
- Created `movieSlice` to manage movie-related data.
- Connected the app with Redux using the `Provider`.

### 7. Header UI

- Built a reusable header component.
- Added the Netflix logo in the header.
- Added a user profile image in the header after login.
- Added a Sign Out button in the header.
- Updated the header background to use a Netflix-like transparent black gradient instead of a plain solid background.

### 8. Login Page UI

- Added a full-screen background image similar to Netflix-style login screens.
- Added a dark overlay on top of the background image.
- Styled the auth form using Tailwind CSS.
- Created a clean centered login/signup card layout.

### 9. Movie Data Fetching

- Created a custom hook `useNowPlaying`.
- Fetched now playing movies from TMDB API.
- Stored fetched movies inside Redux.

### 10. Browse Page Setup

- Created the `Browse` page.
- Connected the browse page with the header.
- Added the main content structure using `MainContainer` and `SecondaryContainer`.
- Triggered now playing movie data fetch when the browse page loads.

### 11. Main Movie Hero Section

- Created `MainContainer` for the featured movie section.
- Selected the first now playing movie as the current featured movie.
- Passed featured movie title and overview into `VideoTitle`.
- Started building `VideoBG` for the video background section.

### 12. Video Title Section

- Created `VideoTitle` component.
- Displayed the featured movie title.
- Displayed the featured movie overview.
- Added placeholder buttons for `Play` and `More Info`.

### 13. Secondary Content Section

- Created `SecondaryContainer` component as a placeholder for upcoming movie lists and categories.
- Kept the structure ready for future expansion.

## Current Project Status

- Authentication flow is working.
- Redux store integration is working.
- TMDB now playing movie data fetch is connected.
- Main browse page structure is started.
- Hero title section is partially implemented.
- Video background and secondary movie rows are still pending further development.

## Planned Next Updates

- Complete the `VideoBG` component.
- Add movie trailer or background video support.
- Build movie cards and movie list rows inside `SecondaryContainer`.
- Add more TMDB categories such as popular, top rated, and upcoming.
- Improve responsiveness for mobile and tablet screens.
- Refine the browse page UI to look more polished and Netflix-like.
- Add GPT-based movie search or recommendation features later if needed.

## Run The Project

```bash
npm start
```

## Build The Project

```bash
npm run build
```

## Note

This README is not final. It will be updated continuously as more features are implemented in the project.
