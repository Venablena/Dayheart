import React, { Component } from 'react'
import { FirebaseAuth } from 'react-firebaseui'
import * as firebase from 'firebase'
import { firebaseConfig } from '../../config.js'
import { Login } from './containers/Login'

// Initialize Firebase. This will be used for authorization.
const config = {
  apiKey: "AIzaSyDLoa1i3yqXMa-Ldak5NADLHq5UCK6oL0w",
  authDomain: "dayheart-98108.firebaseapp.com",
  databaseURL: "https://dayheart-98108.firebaseio.com",
  projectId: "dayheart-98108",
  storageBucket: "dayheart-98108.appspot.com",
  messagingSenderId: "786071528481"
};
//
//
// const authUi = new firebaseui.auth.AuthUI(firebase.auth());
//
//
class Auth extends Component {
  //local state
  state = {
    signedIn: false
  }

  componentDidMount () {
    firebase.initializeApp(config)

    //   'signInOptions': [
    //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //     firebase.auth.EmailAuthProvider.PROVIDER_ID
    //   ]
    // };
    // authUi.start('#firebaseui-auth', uiConfig);
  }

  componentWillUnmount () {
    authUi.reset()
  }

  render () {
    return (
      <div id="firebaseui-auth">
        <Login {...this.props} />
      </div>
    );
  }
}

export default Login
