import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUFIr8S599aB-CdxbA3HUrBPv9GuFRAWU",
  authDomain: "todo-app-e69e1.firebaseapp.com",
  projectId: "todo-app-e69e1",
  storageBucket: "todo-app-e69e1.appspot.com",
  messagingSenderId: "559807108765",
  appId: "1:559807108765:web:2567d848a87fe2791da674",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
