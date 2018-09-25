import React, { Component } from 'react';
import Toolbar from './Toolbar';
import Provider from './Provider';
import GoogleMap from '../components/Map';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleOverlay } from '../actions';

import {
  getUser,
  getFavoritesArray,
  getProviders,
} from '../selectors';

export class MapView extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: {}
    }
  }

  handleClick = (target) => {
    const { toggleOverlay } = this.props;
    this.setState({ ...this.state, selected: target.provider })
    toggleOverlay(true)
  }

  render() {

    const {
      providers,
      currentSelection,
      user,
      favorites,
      overlay
    } = this.props;

    return (
      <main>
        <Toolbar redirect= 'list'/>
        <div className= 'map_wrapper'>
          <GoogleMap
            providers= { providers }
            currentSelection= { currentSelection }
            user= { user }
            handleClick= { this.handleClick }
            favorites= { favorites }/>

        <div className= 'overlay'>
          { overlay ?
            <Provider
              provider= { this.state.selected }
              isActive= { true }/>
              : null }
        </div>
        </div>

      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    overlay: state.dayheart.toggleOverlay,
    providers: getProviders(state),
    currentSelection: state.dayheart.providers.filtered,
    favorites: getFavoritesArray(state),
    user: getUser(state),
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleOverlay }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(MapView)
