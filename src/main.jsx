import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const firebaseConfig = {
  apiKey: "AIzaSyBiMAqBpZED4ynusZ6Jm26EMxG6Uhsdy1o",
  authDomain: "proyecto-tienda-2a928.firebaseapp.com",
  projectId: "proyecto-tienda-2a928",
  storageBucket: "proyecto-tienda-2a928.appspot.com",
  messagingSenderId: "390189636817",
  appId: "1:390189636817:web:68120dec2360deb66479f0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
