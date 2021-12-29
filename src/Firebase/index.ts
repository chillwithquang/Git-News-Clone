import * as firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDqBDXmjjCp4bjswXrQQKbZv0S23lIMX8o',
  authDomain: 'git-news-cl.firebaseapp.com',
  projectId: 'git-news-cl',
  storageBucket: 'git-news-cl.appspot.com',
  messagingSenderId: '287609528597',
  appId: '1:287609528597:web:8dccc2863700d18c96891c',
  measurementId: 'G-QBCXF80RX3',
};

if (!firebase.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
