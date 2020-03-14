import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAYfxo2fD6TBopDyG3B0Ux1bwEI1KivJmk",
  authDomain: "expensify-255a0.firebaseapp.com",
  databaseURL: "https://expensify-255a0.firebaseio.com",
  projectId: "expensify-255a0",
  storageBucket: "expensify-255a0.appspot.com",
  messagingSenderId: "931411755928",
  appId: "1:931411755928:web:6116f596cf7a941ab661ed",
  measurementId: "G-5P1B3YLKZZ"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 

export { firebase, googleAuthProvider, database as default };