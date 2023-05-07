// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjMG3XbvG4nB6a04xmUZpaHwJoxEsDOAI",
  authDomain: "adotapet-b7897.firebaseapp.com",
  projectId: "adotapet-b7897",
  storageBucket: "adotapet-b7897.appspot.com",
  messagingSenderId: "100171042240",
  appId: "1:100171042240:web:c53cd2b142e254d4294c25",
  measurementId: "G-2R8242MHY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);