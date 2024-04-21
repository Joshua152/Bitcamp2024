// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfVfYlNhFTk_yGgApMvObYXRI8YOIB-pw",
  authDomain: "bitcamp-login.firebaseapp.com",
  projectId: "bitcamp-login",
  storageBucket: "bitcamp-login.appspot.com",
  messagingSenderId: "1075530525267",
  appId: "1:1075530525267:web:e77cc82bb6a5a769edb4a6",
  measurementId: "G-CB1VR00JNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const getProfileInfo = async function(user) {
  const docRef = doc(db, "profiles", user.uid);
  const docSnap = await getDoc(docRef)

  console.log(user.uid)
  console.log(docSnap.exists())

  if(docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
}