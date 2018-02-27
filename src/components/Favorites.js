import React from 'react';
import { connect } from 'react-redux'
import SwipeToSlide from '../containers/Slider'

const Favorites = ({ favorites }) => {
  return (
    <div>
      <SwipeToSlide />
    </div>
  )
}

const mapStateToProps = (state) => ({
  favorites: state.dayheart.providers.favorites.data
})

export default connect(mapStateToProps)(Favorites)
