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

export const createUserProfileDocument = async (userAuth, addidtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...addidtionalData });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
