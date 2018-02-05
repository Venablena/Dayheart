import React, { Component } from 'react';
import { GoogleAPIKey } from '../config'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { iconPath } from '../config'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

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

  markers = this.props.currentSelection.map(el => {
    const match = this.props.favorites.find(favorite => favorite.id === el.id)
    let strokeColor
    match ? strokeColor = 'red' : strokeColor = 'teal'

    const icon = {
      path: iconPath,
      strokeColor: strokeColor,
      strokeWeight: 1,
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

  //FOR LATER: Load new providers when the map moves
  // centerMoved = () => {
  //   console.log("load new centers at this location");
  // }
  //FOR LATER: recenter map on current location
  // recenterMap = () => {
  //   const map = this.map;
  //   const curr = this.state.currentLocation;
  //   const google = this.props.google;
  //   const maps = google.maps;
  //
  //   if (map) {
  //       let center = new maps.LatLng(curr.lat, curr.lng)
  //       map.panTo(center)
  //   }
  // }
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
// //Center the map on the new location
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.currentLocation !== this.state.currentLocation) {
//       this.recenterMap();
//     }
//   }

  render() {

    if (!this.props.loaded) return (<div>Loading...</div>)

    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={this.state.currentLocation}
        centerAroundCurrentLocation={false}>
       { this.markers }
      </Map>
    );
  }
}

const mapStateToProps = (state) => ({
  overlay: state.dayheart.toggleOverlay
})
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ toggleOverlay }, dispatch)
// }

const GoogleMap = GoogleApiWrapper({apiKey: GoogleAPIKey})(MapContainer)
// connect(mapStateToProps, mapDispatchToProps)
export default GoogleMap
