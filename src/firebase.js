import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB-gKMA6kbhuFR7Pj4LYb2cdpL8C6cnR28',
  authDomain: 'react-todo-hook.firebaseapp.com',
  databaseURL: 'https://react-todo-hook.firebaseio.com',
  projectId: 'react-todo-hook',
  storageBucket: 'react-todo-hook.appspot.com',
  messagingSenderId: '1006491093601',
  appId: '1:1006491093601:web:1abe129d1745ea19357820',
  measurementId: 'G-G8XMNB61P8',
})

const db = firebaseApp.firestore()

export default db
