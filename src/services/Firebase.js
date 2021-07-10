import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAcNDiisl2FkOyEu6dgKMSHLd9jLSRjhAU",
  authDomain: "rentapp-39cf6.firebaseapp.com",
  databaseURL: "https://rentapp-39cf6.firebaseio.com",
  projectId: "rentapp-39cf6",
  storageBucket: "rentapp-39cf6.appspot.com",
  messagingSenderId: "338426709384",
  appId: "1:338426709384:android:085db8dc7d61ce5792e63d",
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
