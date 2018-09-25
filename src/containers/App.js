import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../styles/index.css';

import Home from '../components/Home';
import Welcome from '../components/Welcome';
import Login from './Login';
import Single from './SingleView';
import MapView from './MapView';
import ListView from './ListView';

import {
  getProviders,
  getFavorites
} from '../actions';

class App extends Component {

  componentDidMount() {
    const { getProviders } = this.props;
    getProviders()
  }

  componentDidUpdate(){
    const {
      user,
      favorites,
      getFavorites,
    } = this.props;

    (user && !favorites.isLoaded ) && getFavorites(user)
  }

  render() {
    const { user } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/map" component= { MapView }/>
          <Route path="/login" component= { Login }/>
          <Route path="/list" component= { ListView }/>
          <Route path="/providers/:providerId" component= { Single }/>
          <Route exact path='/' render={() => (user ? (<Welcome/>) : (<Home/>)
          )}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
      providers: state.dayheart.providers,
      favorites: state.dayheart.favorites,
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
