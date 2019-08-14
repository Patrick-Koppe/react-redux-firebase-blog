import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCmH7AZ0BECopfxVg4Jc8wrwbfye-rG2_M",
    authDomain: "marioplan-f7957.firebaseapp.com",
    databaseURL: "https://marioplan-f7957.firebaseio.com",
    projectId: "marioplan-f7957",
    storageBucket: "",
    messagingSenderId: "932261668832",
    appId: "1:932261668832:web:ca86c28122191baf"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;