import React, { Component } from 'react';
import Toolbar from '../components/Toolbar'
import InfoBar from '../components/InfoBar'
import GoogleApiWrapper from '../components/Map'

class MapView extends Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log('state:', this.state);
    return (
      <main>
        <Toolbar />
        <InfoBar />
        <GoogleApiWrapper />
      </main>
  )}
}

export default MapView;
