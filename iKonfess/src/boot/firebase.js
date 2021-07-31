// import { boot } from 'quasar/wrappers'

// // "async" is optional;
// // more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, Vue... } */) => {
//   // something to do
// })




// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
// import "firebase/auth";
import "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyCzNBnxQ9Ql-hdNjhaODg1_KTV_vkHnqJY",
    authDomain: "ikonfess-16607.firebaseapp.com",
    projectId: "ikonfess-16607",
    storageBucket: "ikonfess-16607.appspot.com",
    messagingSenderId: "560253048981",
    appId: "1:560253048981:web:765005c56f3bc4ab30239c",
    measurementId: "G-Y3PFLW01MX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//You'll find this (Initialise cloud firestore) when you click 'Cloud firestore' option on step 5 in getting started
let db = firebase.firestore();

export default db
