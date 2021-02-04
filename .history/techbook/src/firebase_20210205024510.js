// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import Firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBTC0pjhOwK79eiC5Nb1iNKFJ13tfS05rU",
    authDomain: "techcommunityiict.firebaseapp.com",
    projectId: "techcommunityiict",
    storageBucket: "techcommunityiict.appspot.com",
    messagingSenderId: "689506946237",
    appId: "1:689506946237:web:6d9817a274d470c96afbd4",
    measurementId: "G-PS4LLML95F"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db=firebaseapp.firestore();
const auth=firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider()