import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXX6yzh1nCmQLWm3hHqYml9qAGgIYB2NE",
    authDomain: "slack-clone-1e061.firebaseapp.com",
    databaseURL: "https://slack-clone-1e061-default-rtdb.firebaseio.com",
    projectId: "slack-clone-1e061",
    storageBucket: "slack-clone-1e061.appspot.com",
    messagingSenderId: "241011660529",
    appId: "1:241011660529:web:a8751dca0a894d6e66fb50",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;
