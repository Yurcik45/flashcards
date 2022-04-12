import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBn9RcjAdHEB1ZJwO6Z39xunVD9tm7VvQw",
  authDomain: "flashcards-f6c98.firebaseapp.com",
  databaseURL: "https://flashcards-f6c98-default-rtdb.firebaseio.com",
  projectId: "flashcards-f6c98",
  storageBucket: "flashcards-f6c98.appspot.com",
  messagingSenderId: "171963010694",
  appId: "1:171963010694:web:9fd286bc377e2f52f60b07",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
