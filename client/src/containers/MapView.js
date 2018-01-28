import React from 'react';
import Toolbar from '../components/Toolbar'
import InfoBar from '../components/InfoBar'
import GoogleApiWrapper from '../components/Map'

const MapView = ({}) => (
  <main>
    <Toolbar />
    <InfoBar />
    <GoogleApiWrapper />
  </main>
);

export default MapView;
