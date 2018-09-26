import React, { Component } from 'react';
import Toolbar from './Toolbar';
import ProviderView from './ProviderView';
import GoogleMap from '../components/GoogleMap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleOverlay } from '../actions';

import {
  getUser,
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

//SEPARATE OVERLAY INTO A HOC/WRAPPER
  handleClick = (target) => {
    const { overlay, toggleOverlay } = this.props;
    this.setState({ ...this.state, selected: target.provider })
    !overlay && toggleOverlay(true)
  }

  render() {
    const {
      providers,
      currentSelection,
      favorites,
      overlay,
    } = this.props;

    return (
      <main>
        <Toolbar redirect= 'list'/>
        <div className= 'map_wrapper'>
          <GoogleMap
            providers= { providers }
            currentSelection= { currentSelection }
            handleClick= { this.handleClick }
            favorites= { favorites }/>

        <div className= 'overlay'>
          { overlay &&
            <ProviderView
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
    favorites: getFavoritesById(state),
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleOverlay }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(MapView)
