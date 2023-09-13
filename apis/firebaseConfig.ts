import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
// import {...} from "firebase/database";
import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase

export const firebaseConfig = {
  apiKey: "AIzaSyBy1q4o3mcFPM2pvMAiG2pAjKR9ZuFEKuw",
  authDomain: "ngo1-9d1d7.firebaseapp.com",
  databaseURL: "https://ngo1-9d1d7.firebaseio.com",
  projectId: "ngo1-9d1d7",
  storageBucket: "ngo1-9d1d7.appspot.com",
  messagingSenderId: "570427086907",
  appId: "1:570427086907:web:681f897d576fa802f3e41e",
  measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
