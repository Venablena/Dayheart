import React from 'react';
import { connect } from 'react-redux'

const Favorites = ({ favorites }) => {
console.log('favorites:', favorites);

  return (
  <div>Favorites image</div>
)}

const mapStateToProps = (state) => ({
  favorites: state.dayheart.providers.favorites
})

export default connect(mapStateToProps)(Favorites)
