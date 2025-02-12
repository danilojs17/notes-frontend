// lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzMifoZtZD5jY-oIX77ycImXdwvjDQzDI",
  authDomain: "test-frontend-692a5.firebaseapp.com",
  projectId: "test-frontend-692a5",
  storageBucket: "test-frontend-692a5.firebasestorage.app",
  messagingSenderId: "154678845819",
  appId: "1:154678845819:web:29c75520dc49abe8075dde",
  measurementId: "G-7XEN4ZGXW5",
};

let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApps()[0];
}

export const db = getFirestore(firebaseApp);
