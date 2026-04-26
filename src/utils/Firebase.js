import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqAcDUfyaPZ4z2K_WGoDqZdf3upq0kClA",
  authDomain: "movie-gpt-433a6.firebaseapp.com",
  projectId: "movie-gpt-433a6",
  storageBucket: "movie-gpt-433a6.firebasestorage.app",
  messagingSenderId: "1035223185626",
  appId: "1:1035223185626:web:38f607955d4975300b8de3",
  measurementId: "G-XZ1RZ6ZPGQ"
};

const app = initializeApp(firebaseConfig);
let analytics;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

const auth = getAuth(app);

export { app, auth, analytics };
export default auth;
