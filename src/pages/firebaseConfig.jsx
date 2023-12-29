import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA4RwkhcxEwF6433lwotKjXdws4PlY8vMo",
    authDomain: "employees-714f5.firebaseapp.com",
    projectId: "employees-714f5",
    storageBucket: "employees-714f5.appspot.com",
    messagingSenderId: "186308449715",
    appId: "1:186308449715:web:a8e1e396518bd2a74b27c6",
    measurementId: "G-MTCDYQ4RF0"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;