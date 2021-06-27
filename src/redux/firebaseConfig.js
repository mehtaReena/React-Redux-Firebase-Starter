import firebase from 'firebase';


// Your config code goes here.
const firebaseConfig = {
    apiKey: "AIzaSyCPMIuQtUzWdKRbB2-qu8RPJf194cDnKf0",
    authDomain: "company-dir-d079a.firebaseapp.com",
    projectId: "company-dir-d079a",
    storageBucket: "company-dir-d079a.appspot.com",
    messagingSenderId: "600715990091",
    appId: "1:600715990091:web:78a01ad6fcff5b16d5e9ce",
    measurementId: "G-9JYN9MQS8G"
  };


firebase.initializeApp(firebaseConfig);

export default firebase;