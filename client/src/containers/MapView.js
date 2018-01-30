import React from 'react';
import Toolbar from '../components/Toolbar'
import Infobar from '../components/Infobar'
import GoogleApiWrapper from '../components/Map'

const MapView = ({providers, user}) => {
    console.log('MapView props:', providers, user);
    return (
      <main>
        <Toolbar />
        <Infobar />
        <GoogleApiWrapper providers= {providers} user={user}/>
      </main>
  )
}

export default MapView
