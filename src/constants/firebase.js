import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp99uqOaxyPMOH01Rq-2cpcQzPpPRgiNY",
  authDomain: "zamkiapp.firebaseapp.com",
  projectId: "zamkiapp",
  storageBucket: "zamkiapp.appspot.com",
  messagingSenderId: "157317195285",
  appId: "1:157317195285:web:5d99242b18bf01ef56501c"
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
