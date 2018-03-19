import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyC9IrP6oRAPvxRnzEeA9g7-cNhvkHO4Dug',
  authDomain: 'cat-chat-2018.firebaseapp.com',
  databaseURL: 'https://cat-chat-2018.firebaseio.com',
  projectId: 'cat-chat-2018',
  storageBucket: 'cat-chat-2018.appspot.com',
  messagingSenderId: '24424472687'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
