import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDIB8vLoiAaVcqxNUrfW3rlOKqvobSJLHM",
    authDomain: "netflix-clone-fc38c.firebaseapp.com",
    projectId: "netflix-clone-fc38c",
    storageBucket: "netflix-clone-fc38c.appspot.com",
    messagingSenderId: "164405180560",
    appId: "1:164405180560:web:49b849627b4e164af88015"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {auth, db}
//export default db;