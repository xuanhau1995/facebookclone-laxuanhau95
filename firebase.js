import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBn1IXAyDaCebt_qwujv3_RDsth7T9p20k",
  authDomain: "facebook-clone2-0.firebaseapp.com",
  projectId: "facebook-clone2-0",
  storageBucket: "facebook-clone2-0.appspot.com",
  messagingSenderId: "1010281141748",
  appId: "1:1010281141748:web:a2c0ca45edb7eac60215a1",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
