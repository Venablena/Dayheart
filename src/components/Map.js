import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { GoogleAPIKey, iconPath } from '../config';

export class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentLocation : {
        lat: 47.5596961,
        lng: -122.3044783
      }
    }
  }

  makeMarkers = () => {
    const {
      handleClick,
      favorites,
      providers
    } = this.props;

    return providers.map(el => {
      const strokeColor = favorites.hasOwnProperty(el.id) ? 'red' : 'teal';
      const icon = {
        path: iconPath,
        strokeColor: strokeColor,
        strokeWeight: 1,
        scale: 1.25
      };
      const coordinates = { lat: el.lat, lng: el.long };

      return <Marker
          key = { el.id }
          position = { coordinates }
          onClick = { handleClick }
          icon = { icon }
          provider = { el }/>
    })
  }

  // FOR LATER:
  // //Get the location from the browser
  //   componentDidMount() {
  //     if (this.props.centerAroundCurrentLocation) {
  //       if (navigator && navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition((pos) => {
  //           const coords = pos.coords;
  //           this.setState({
  //             currentLocation: {
  //               lat: coords.latitude,
  //               lng: coords.longitude
  //             }
  //           })
  //         })
  //       }
  //     }
  //   }

  render() {
    const {
      loaded,
      google,
      providers
    } = this.props;

    if (!loaded) return (<div>Loading...</div>)

    return (
      <Map
        google={google}
        zoom={14}
        initialCenter={this.state.currentLocation}
        centerAroundCurrentLocation>
       { providers.length && this.makeMarkers() }
      </Map>
    );
  }
}

const GoogleMap = GoogleApiWrapper({ apiKey: GoogleAPIKey })(MapContainer)

export default GoogleMap
