import firebase from 'firebase';
import { FIREBASE_CONFIG } from "./properties";

let fbconfig = {
  apiKey: "AIzaSyAQqPZ24qdDLS0KTjP76ovcDjM4qOsxkZ0",
  authDomain: "husky-hunt-2021.firebaseapp.com",
  databaseURL: "https://husky-hunt-2021-default-rtdb.firebaseio.com/",
  projectId: "husky-hunt-2021",
  storageBucket: "husky-hunt-2021.appspot.com",
  messagingSenderId: "521153023868",
  appId: "1:521153023868:web:f49962e272bcc7881adef9",
  measurementId: "G-WLE0G9TXC8"
};
let fire = firebase.initializeApp(fbconfig);
let rootRef = fire.database().ref();
let cluesRef = rootRef.child('clues');
let huntersRef = rootRef.child('hunters');

export {
  fire,
  cluesRef,
  huntersRef
}
