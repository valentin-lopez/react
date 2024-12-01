import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbLJOqCUMBCmbGOVESjGDUML3wiDpI7bQ",
  authDomain: "backend-ecommerce-637f8.firebaseapp.com",
  projectId: "backend-ecommerce-637f8",
  storageBucket: "backend-ecommerce-637f8.firebasestorage.app",
  messagingSenderId: "549415955688",
  appId: "1:549415955688:web:98eb75417ae1bf8cdd6d5d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
