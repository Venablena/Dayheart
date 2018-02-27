import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header'

//Firebase for authorization, login and signup
import * as firebase from 'firebase'
import { FirebaseAuth } from 'react-firebaseui'

const Login = (props) => {
  const uiConfig = {
      signInFlow : 'redirect',
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: (currentUser) => props.history.push('/')
      }
    }

  return (
    <main>
      <Header />
      <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    </main>
  );
}

const mapStateToProps = ({ firebase: { auth, profile, currentUser } }) => ({
  auth,
  profile,
  currentUser
})

export default connect(mapStateToProps)(Login);
