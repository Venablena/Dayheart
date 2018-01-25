import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
//Firebase for login and signup
import * as firebase from 'firebase'
import { firebaseConfig } from '../config.js'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Search from '../containers/Search'

const ActionCreators = []

// const Page = ({ title }) => (
// );
//
// const Home = (props) => (
//   <Page title="Home"/>
// );
//
// const Welcome = (props) => (
//   <Page title="Welcome"/>
// );
//
// const Login = (props) => (
//   <Page title="Login"/>
// );

class App extends Component {

  componentDidMount () {
    firebase.initializeApp(firebaseConfig)
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/search" component={Search}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

const stateToProps = (state) => {
  return state
}

const dispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch)

export default connect(stateToProps, dispatchToProps)(App);
