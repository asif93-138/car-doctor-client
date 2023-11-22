// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId
  apiKey: "AIzaSyB4RIytJByJE2FCXCwA7GlukeNcwsmR3jo",
  authDomain: "car-doctor-client-8671f.firebaseapp.com",
  projectId: "car-doctor-client-8671f",
  storageBucket: "car-doctor-client-8671f.appspot.com",
  messagingSenderId: "514675012246",
  appId: "1:514675012246:web:dbe6defaa9721e39de48b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;