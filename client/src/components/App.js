import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
//Firebase for authorization, login and signup
import * as firebase from 'firebase'
import { firebaseConfig } from '../config.js'
import { FirebaseAuth } from 'react-firebaseui'

import Home from '../containers/Home'
import Login from '../containers/Login'
//import Firebase from './Firebase'
import MapView from '../containers/MapView'
import ListView from '../containers/ListView'
import Welcome from '../containers/Welcome'

const ActionCreators = []

// example on how to pass props
// const Page = ({ title }) => ();
// const Login = (props) => (<Page title="Login"/>)

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      signedIn: false
    }
  }

  uiConfig = {
    signInFlow : 'popup',//OR 'redirect'
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    //redirectUrl:'',
    callbacks: {
      signInSuccess: currentUser => {
        this.props.createUserProfile(currentUser),
        this.setState({ signedIn: true })
        return false // avoids redirect
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/map" component={() => <MapView />}/>
          <Route path="/login" component={() => <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>}/>
          <Route path="/list" component={ListView}/>
          <Route path="/welcome" component={Welcome}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

const stateToProps = (state) => ({})

const dispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch)

export default connect(stateToProps, dispatchToProps)(App);
