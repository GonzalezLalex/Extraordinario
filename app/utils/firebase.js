import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCNkUDTwQBBnkSVNOWGlv2SYNPu5uh4gM",
  authDomain: "indian-db42d.firebaseapp.com",
  projectId: "indian-db42d",
  storageBucket: "indian-db42d.appspot.com",
  messagingSenderId: "506375135967",
  appId: "1:506375135967:web:4a0e1caa10e6e012a63f6a"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

