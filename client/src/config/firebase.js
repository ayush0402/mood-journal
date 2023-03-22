import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd84zVx8J6Owiq24F01JNM_CtUq5F8Uqw",
  authDomain: "mood-journal-2f027.firebaseapp.com",
  projectId: "mood-journal-2f027",
  storageBucket: "mood-journal-2f027.appspot.com",
  messagingSenderId: "741528644145",
  appId: "1:741528644145:web:6f0cdfdbc015e83a28c310",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
