import React from 'react';
import Toolbar from '../components/Toolbar'
import InfoBar from '../components/InfoBar'
import GoogleApiWrapper from '../components/Map'

const MapView = (props) => {
    console.log('MapView props:', props);
    return (
      <main>
        <Toolbar />
        <InfoBar />
        <GoogleApiWrapper providers= {props.providers} user={props.user}/>
      </main>
  )
}

// export default MapView;
//
// class MapView extends Component {
//   constructor(props){
//     super(props)
//   }
//
//   render(){
//     console.log('state:', this.props);
//     return (
//       <main>
//         <Toolbar />
//         <InfoBar />
//         <GoogleApiWrapper />
//       </main>
//   )}
// }
export default MapView
