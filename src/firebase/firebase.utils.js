import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDnHKglRUY3Tm_VxqDTcnCkdfIfjWU_mOc',
  authDomain: 'crwn-db-9999.firebaseapp.com',
  databaseURL: 'https://crwn-db-9999.firebaseio.com',
  projectId: 'crwn-db-9999',
  storageBucket: 'crwn-db-9999.appspot.com',
  messagingSenderId: '360206069497',
  appId: '1:360206069497:web:54855e3937e8ed5acb7c28',
  measurementId: 'G-LL1B0CQDMV',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
