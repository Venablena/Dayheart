import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { firebaseAuth } from 'react-firebaseui'
import { Container } from 'semantic-ui-react'

// FirebaseUI config. This will provide the sign up and log in interface
var uiConfig = {
  signInFlow : 'popup'
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ]
};
 // Firebase log in UI
ui.start('#firebaseui-auth-container', uiConfig);

return (
  <Container>
    <FirebaseAuth uiConfig=uiConfig firebaseAuth={firebase.auth()}/>
  </Container>
);

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Firebase);
