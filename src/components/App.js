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
import Single from '../containers/SingleView'
import MapView from '../containers/MapView'
import ListView from '../containers/ListView'
import Welcome from '../containers/Welcome'

import {
  getProviders,
  toggleOverlay
} from '../actions'

const ActionCreators = []

// example on how to pass props
// const Page = ({ title }) => ();
// const Login = (props) => (<Page title="Login"/>)

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     providers: data
  //   }
  // }
  //

  componentDidMount() {
    this.props.getProviders()
  }

  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/map" component={MapView}/>
          <Route path="/login" component={Login}/>
          <Route path="/list" component={() => <ListView
            {...this.props}/>}/>
          <Route path="/providers/:providerId" component={Single}/>
          {/*<Route path="/welcome" component={Welcome}/>*/}
          <Route exact path='/' render={() => (this.props.user ? (<Welcome/>) : (<Home/>)
          )}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {

  return ({
      providers: state.dayheart.providers.all,
      selected: state.dayheart.providers.selected,
      favorites: state.dayheart.providers.favorites,
      user: state.firebase.auth.uid
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getProviders,
    toggleOverlay
   }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
