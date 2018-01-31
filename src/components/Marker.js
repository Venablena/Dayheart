import React from 'react';
import { Marker } from 'google-maps-react'

const Init_Marker = (props) => {
  const handleClick = (props, marker, e) => {
    console.log("I'm clicking on a marker");
  }
console.log('marker props:', props);
  return (
    <Marker
     name = { props.name }
     position = { {lat: 47.5514413,
     lng: -122.3299722} }
     onClick = { handleClick } />
   );
}

export default Marker;
