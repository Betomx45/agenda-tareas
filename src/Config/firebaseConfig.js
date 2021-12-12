// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvppgRA2OQa8FSUZxJJ83r5QxU9eK2FvY",
  authDomain: "homerecord-ea094.firebaseapp.com",
  databaseURL: "https://homerecord-ea094-default-rtdb.firebaseio.com",
  projectId: "homerecord-ea094",
  storageBucket: "homerecord-ea094.appspot.com",
  messagingSenderId: "78929900161",
  appId: "1:78929900161:web:87ff0274f3058498d65380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;