// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0_p6nfA1bpCh0MDahTGga51ZN5-7vVPo",
  authDomain: "headstarter-project-3.firebaseapp.com",
  projectId: "headstarter-project-3",
  storageBucket: "headstarter-project-3.appspot.com",
  messagingSenderId: "1036153386314",
  appId: "1:1036153386314:web:f0f6a0b85bf6506fb77db3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
