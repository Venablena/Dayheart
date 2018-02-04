import React, { Component } from 'react';
import Toolbar from '../components/Toolbar'
import Infobar from '../components/Infobar'
import Provider from '../components/Provider'
import GoogleMap from '../components/Map'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { toggleOverlay } from '../actions'
import { Container } from 'semantic-ui-react'

export class MapView extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: {}
    }
  }

  handleClick = (target) => {
    this.setState({ ...this.state, selected: target.provider })
    this.props.toggleOverlay(true)
  }

  render() {

    return (
      <main>
        <Toolbar />
        <Infobar />
        <div className='map_wrapper'>
          <GoogleMap
            providers= {this.props.providers}
            currentSelection= {this.props.currentSelection}
            user= {this.props.user}
            handleClick= {this.handleClick}/>
        </div>
        <div className= 'overlay'>
          {this.props.overlay ?
            <Provider
              provider={ this.state.selected }
              isActive= {true}/>
              : null }
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    overlay: state.dayheart.toggleOverlay,
    providers: state.dayheart.providers.all,
    currentSelection: state.dayheart.providers.filtered,
    favorites: state.dayheart.providers.favorites,
    user: state.firebase.auth.uid
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleOverlay }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(MapView)
