import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCN5-RJv5qISsQkdVDjoEOzTrSOyKbkJ3w",
  authDomain: "e-shop-29eb4.firebaseapp.com",
  projectId: "e-shop-29eb4",
  storageBucket: "e-shop-29eb4.firebasestorage.app",
  messagingSenderId: "130764746147",
  appId: "1:130764746147:web:828f774bb209c87a83fe16"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth }