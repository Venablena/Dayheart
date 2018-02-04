import React from 'react';
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'
import Provider from '../components/Provider'
import dayheart1 from '../img/dayheart1.jpg'
import dayheart2 from '../img/dayheart2.jpg'


const Favorites = ({ favorites }) => {

return (
  <div className='favorites'>
      {favorites.map((center, idx) => <Provider key={idx} provider={center}/>)}
  </div>
)}

const mapStateToProps = (state) => ({
  favorites: state.dayheart.providers.favorites.data
})

export default connect(mapStateToProps)(Favorites)
