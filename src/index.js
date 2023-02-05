import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwrZxUzKo7eD2UX-DwWW_Iv9EW7YPsgDA",
  authDomain: "coderhouse-ecommerce-43625.firebaseapp.com",
  projectId: "coderhouse-ecommerce-43625",
  storageBucket: "coderhouse-ecommerce-43625.appspot.com",
  messagingSenderId: "814552597631",
  appId: "1:814552597631:web:b4f92ed17fc0b8e1276b4a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

