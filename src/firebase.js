import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqoL5iFgVhN-57iPfIjzbG3gSUPmUBQkk",
  authDomain: "netflix-clone-65f7a.firebaseapp.com",
  projectId: "netflix-clone-65f7a",
  storageBucket: "netflix-clone-65f7a.appspot.com",
  messagingSenderId: "591146671501",
  appId: "1:591146671501:web:b02edea6d05109f0b231c4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
