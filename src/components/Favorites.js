import React from 'react';
import { connect } from 'react-redux'
import Provider from '../components/Provider'

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
