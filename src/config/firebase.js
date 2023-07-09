/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// import { getAnalytics } from "firebase/analytics";
const { getStorage } = require('firebase/storage')

const firebaseConfig = {
  apiKey: "AIzaSyD0m60RXBSMAsDj6kCfpl6GONUVYhU9nc4",
  authDomain: "jrshoud-dd7a8.firebaseapp.com",
  projectId: "jrshoud-dd7a8",
  storageBucket: "jrshoud-dd7a8.appspot.com",
  messagingSenderId: "966676483248",
  appId: "1:966676483248:web:a5230068dc2c8b54b0ff75",
  measurementId: "G-114XSS97E5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const storage = getStorage(app)

module.exports = storage
