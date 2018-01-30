import React from 'react';
import Toolbar from '../components/Toolbar'
import InfoBar from '../components/InfoBar'
import GoogleApiWrapper from '../components/Map'

const MapView = ({providers, user}) => {
    console.log('MapView props:', providers, user);
    return (
      <main>
        <Toolbar />
        <InfoBar />
        <GoogleApiWrapper providers= {providers} user={user}/>
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
