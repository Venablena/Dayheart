import React, { Component } from 'react';
import { GoogleAPIKey } from '../config'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  handleClick = (props, marker, e) => {
    console.log("I'm clicking on a marker");
  }

  centerMoved = () => {
    console.log("load new centers at this location");
  }

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
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          })
        })
      }
    }
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
      return (
        <Map
          google={this.props.google}
          zoom={14}
          onReady={this.fetchPlaces}
          onDragend={this.centerMoved}
        >

          <Marker onClick={this.handleClick}
                  name={'Current location'} />

        </Map>
      );
    }
}

export default GoogleApiWrapper({
  apiKey: GoogleAPIKey
})(MapContainer)
