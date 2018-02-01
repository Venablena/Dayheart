import React, { Component } from 'react';
import { GoogleAPIKey } from '../config'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props){
    super(props)
  }



  // centerMoved = () => {
  //   console.log("load new centers at this location");
  // }

  recenterMap = () => {
    const map = this.map;
    const curr = this.state.currentLocation;
    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng)
        map.panTo(center)
    }
  }

//Get the location from the browser. Only used if 'centerAroundCurrentLocation: true'
  componentDidMount() {
    // if (this.props.centerAroundCurrentLocation) {
    //   if (navigator && navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition((pos) => {
    //       const coords = pos.coords;
    //       this.setState({
    //         currentLocation: {
    //           lat: coords.latitude,
    //           lng: coords.longitude
    //         }
    //       })
    //     })
    //   }
    // }
  }
//Center the map on the new location
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.currentLocation !== this.state.currentLocation) {
  //     this.recenterMap();
  //   }
  // }

  render() {
      if (!this.props.loaded) {
        return (<div>Loading...</div>)
      }

      const markers = this.props.providers.map(el => {
        const icon = {
          path: 'M15.971,7.708l-4.763-4.712c-0.644-0.644-1.769-0.642-2.41-0.002L3.99,7.755C3.98,7.764,3.972,7.773,3.962,7.783C3.511,8.179,3.253,8.74,3.253,9.338v6.07c0,1.146,0.932,2.078,2.078,2.078h9.338c1.146,0,2.078-0.932,2.078-2.078v-6.07c0-0.529-0.205-1.037-0.57-1.421C16.129,7.83,16.058,7.758,15.971,7.708z M15.68,15.408c0,0.559-0.453,1.012-1.011,1.012h-4.318c0.04-0.076,0.096-0.143,0.096-0.232v-3.311c0-0.295-0.239-0.533-0.533-0.533c-0.295,0-0.534,0.238-0.534,0.533v3.311c0,0.09,0.057,0.156,0.096,0.232H5.331c-0.557,0-1.01-0.453-1.01-1.012v-6.07c0-0.305,0.141-0.591,0.386-0.787c0.039-0.03,0.073-0.066,0.1-0.104L9.55,3.75c0.242-0.239,0.665-0.24,0.906,0.002l4.786,4.735c0.024,0.033,0.053,0.063,0.084,0.09c0.228,0.196,0.354,0.466,0.354,0.76V15.408z',
          strokeColor: 'red',
          strokeWeight: 1,
          fillColor: 'red',
          scale: 1.25
        }
        const coordinates = { lat: el.lat, lng: el.long }
        return <Marker
            key = { el.id }
            position = { coordinates }
            onClick = { this.props.handleClick }
            icon = { icon }
            provider = { el }/>
      })

      return (

        <Map
          style={{width: '100%', height: '90%', marginLeft: '-2%'}}
          google={this.props.google}
          zoom={12}
          initialCenter={{
           lat: 47.5416201,
           lng: -122.3478753
         }}>

         { markers }

        </Map>
      );
    }
}

export default GoogleApiWrapper({
  apiKey: GoogleAPIKey
})(MapContainer)