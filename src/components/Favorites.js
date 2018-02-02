import React from 'react';
import { connect } from 'react-redux'

const Favorites = ({ favorites }) => {
console.log('favorites:', favorites);
  return (
  <div className='favorites'>{favorites.length ? favorites[0] : "You haven't got any favorite childcare providers yet. Search for providers below."}</div>
)}

const mapStateToProps = (state) => ({
  favorites: state.dayheart.providers.favorites
})

export default connect(mapStateToProps)(Favorites)
