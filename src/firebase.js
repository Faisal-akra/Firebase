import { initializeApp } from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyD6BtSkNhDKyffojo5SmHT_5yZ1IFNOnr4",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.firebasestorage.app",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};

export const app = initializeApp(firebaseConfig);
