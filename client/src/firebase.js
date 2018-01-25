import firebase from 'firebase'
const firebaseui = require('firebaseui');

// Initialize Firebase. this will be used for authorization.
  const config = {
    apiKey: "AIzaSyDLoa1i3yqXMa-Ldak5NADLHq5UCK6oL0w",
    authDomain: "dayheart-98108.firebaseapp.com",
    databaseURL: "https://dayheart-98108.firebaseio.com",
    projectId: "dayheart-98108",
    storageBucket: "dayheart-98108.appspot.com",
    messagingSenderId: "786071528481"
  };
  firebase.initializeApp(config);

  // FirebaseUI config. This will provide the sign up and log in interface
      var uiConfig = {
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };

 // Firebase log in UI
  ui.start('#firebaseui-auth-container', {
  signInOptions = [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    }
  ]
});

export default firebase
