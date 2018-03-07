import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Single from '../containers/SingleView'
import MapView from '../containers/MapView'
import ListView from './ListView'
import Welcome from './Welcome'

import {
  getProviders,
  getFavorites
} from '../actions'

class App extends Component {

  componentDidMount() {
    this.props.getProviders()
  }

  // componentDidUpdate(){
  //   !this.props.favorites.isLoaded ?
  //   this.props.getFavorites(this.props.user)
  //   : null
  // }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/map" component= { MapView }/>
          <Route path="/login" component= { Login }/>
          <Route path="/list" component= { () =>
            <ListView {...this.props}/> }/>
          <Route path="/providers/:providerId" component= { Single }/>
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
      //favorites: state.dayheart.providers.favorites,
      user: state.firebase.auth.uid,
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getProviders,
    getFavorites
   }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
