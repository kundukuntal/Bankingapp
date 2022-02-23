import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCUWXZqlJ34KmvfnwPbAd-F0ARbbIZQ8eY",
  authDomain: "kuntal-d0edc.firebaseapp.com",
  databaseURL: "https://kuntal-d0edc-default-rtdb.firebaseio.com",
  projectId: "kuntal-d0edc",
  storageBucket: "kuntal-d0edc.appspot.com",
  messagingSenderId: "72915981263",
  appId: "1:72915981263:web:badf500781416375fdf8ba",
  measurementId: "G-1MWWZ5ETTZ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;