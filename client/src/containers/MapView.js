import React from 'react';
import Toolbar from '../components/Toolbar'
import Infobar from '../components/Infobar'
import Overlay from '../components/Overlay'
import GoogleApiWrapper from '../components/Map'
import { Container }from 'semantic-ui-react'

const MapView = ({providers, user}) => {
    console.log('MapView props:', providers, user);
    return (
      <main>
        <Toolbar />
        <Infobar />
        <Container>
          <GoogleApiWrapper providers= {providers} user={user}/>
        <Overlay providers= {providers} user={user}/>
        </Container>
      </main>
  )
}

export default MapView
