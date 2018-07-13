import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD_hbYZuuthcHaGnGBeSrVtN55cMGw2BwI",
    authDomain: "nba-app-41d91.firebaseapp.com",
    databaseURL: "https://nba-app-41d91.firebaseio.com",
    projectId: "nba-app-41d91",
    storageBucket: "nba-app-41d91.appspot.com",
    messagingSenderId: "682660570166"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const googleAuth= new firebase.auth.GoogleAuthProvider();

  export {
      firebaseDB,
      firebase,
      googleAuth
  }


 
