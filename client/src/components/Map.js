import React, { Component } from 'react';
import { GoogleAPIKey } from '../config'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
render() {
    if (!this.props.loaded) {
      return (<div>Loading...</div>)
    }
    return (
      <Map google={this.props.google} zoom={14} onReady={this.fetchPlaces}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GoogleAPIKey
})(MapContainer)

// export default GoogleApiComponent({
//   apiKey: __GAPI_KEY__
// })(Container)
