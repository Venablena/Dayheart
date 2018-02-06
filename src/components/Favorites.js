import React, { Component } from 'react';
import { connect } from 'react-redux'
import Provider from '../components/Provider'
import SwipeToSlide from '../components/Slider'

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
