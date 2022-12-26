import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCGErmFp-mTQ61oX1SYUCua9YQoH3Ea86w",
  authDomain: "mymoney-2083e.firebaseapp.com",
  projectId: "mymoney-2083e",
  storageBucket: "mymoney-2083e.appspot.com",
  messagingSenderId: "317580992352",
  appId: "1:317580992352:web:800fc4724a2db415840805"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth();
const timestamp=firebase.firestore.Timestamp

export { projectFirestore,projectAuth,timestamp }