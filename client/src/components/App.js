import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
//Firebase for authorization, login and signup
import * as firebase from 'firebase'
import { firebaseConfig } from '../config.js'
// import { FirebaseAuth } from 'react-firebaseui'

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
  // constructor(props){
  //   super(props);
  //   // this.state = {
  //   //   loggedIn: false,
  //   //   userId: '',
  //   //   providers: ''
  //   // }
  // }


  componentDidMount() {

    // const userId = firebase.auth().currentUser.uid;
    // return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    //   // ...
    // });
  }

  render() {
    console.log('app props:', this.props);
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/map" component={() => <MapView providers = {this.props.providers}/>}/>
          <Route path="/login" component={Login}/>
          <Route path="/list" component={ListView}/>
          <Route path="/welcome" component={Welcome}/>
          {/*Redirect to welcome screen if user is already logged in*/}
          <Route exact path='/' render={() => (this.props.user ? (<Welcome/>) : (<Home/>)
          )}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
    providers: state.dayheart.providers,
    user: state.firebase.auth.uid
})

// const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch)

export default connect(mapStateToProps)(App);
