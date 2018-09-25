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
  getFavoritesById,
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
    const { overlay, toggleOverlay } = this.props;
    this.setState({ ...this.state, selected: target.provider })
    !overlay && toggleOverlay(true)
  }

  render() {

    const {
      providers,
      currentSelection,
      user,
      favorites,
      overlay,
      favoritesById,
    } = this.props;

    return (
      <main>
        <Toolbar redirect= 'list'/>
        <div className= 'map_wrapper'>
          <GoogleMap
            providers= { providers }
            currentSelection= { currentSelection }
            handleClick= { this.handleClick }
            favorites= { favoritesById }/>

        <div className= 'overlay'>
          { overlay &&
            <Provider
              provider= { this.state.selected }
              isActive= { true }/>
          }
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
    favoritesById: getFavoritesById(state),
    user: getUser(state),
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleOverlay }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(MapView)
