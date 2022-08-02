import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDrqTfgYFeJcDSAMWIXgY1oUF5emzKktyA",
  authDomain: "blog-3883f.firebaseapp.com",
  projectId: "blog-3883f",
  storageBucket: "blog-3883f.appspot.com",
  messagingSenderId: "220523550164",
  appId: "1:220523550164:web:05968d1d5cbfdca6f7b241",
  measurementId: "G-V36P580DSC",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);