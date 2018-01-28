import React from 'react';
import { Marker } from 'google-maps-react'

const initMarker = () => {
  const handleClick = (props, marker, e) => {
    console.log("I'm clicking on a marker");
  }

  return (
    <Marker
     name = { 'Dolores park' }
     position = { {lat: 37.759703, lng: -122.428093} }
     onClick = { handleClick } />
   );
}

export default Marker;
