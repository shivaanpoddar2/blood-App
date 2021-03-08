import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAj34fE5g4Q_ubKNGwzaqEnxtJz-1xRELk",
  authDomain: "blood-31e84.firebaseapp.com",
  databaseURL: "https://blood-31e84-default-rtdb.firebaseio.com",
  projectId: "blood-31e84",
  storageBucket: "blood-31e84.appspot.com",
  messagingSenderId: "340760522158",
  appId: "1:340760522158:web:43848c0e6e90630348ec3f"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();