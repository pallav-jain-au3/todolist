import firebase from 'firebase/app'
import 'firebase/firestore';
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA-_z4Pd7mNmpWErEv52yzMjSZBh6EFKf4",
    authDomain: "todolist-f7013.firebaseapp.com",
    databaseURL: "https://todolist-f7013.firebaseio.com",
    projectId: "todolist-f7013",
    storageBucket: "todolist-f7013.appspot.com",
    messagingSenderId: "177293353330",
    appId: "1:177293353330:web:c144cb2ce1c65e8adf7deb"
})

export  {firebaseConfig as firebase}