import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Form, Container } from 'semantic-ui-react'
import Header from '../components/Header'

//Firebase for authorization, login and signup
import * as firebase from 'firebase'
import { firebaseConfig } from '../config.js'
import { FirebaseAuth } from 'react-firebaseui'

const Login = (props) => {
  const uiConfig = {
      signInFlow : 'redirect',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
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

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ createUser }, dispatch)
// }

export default connect(mapStateToProps)(Login);
