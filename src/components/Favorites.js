import React, { Component } from 'react';
import { connect } from 'react-redux'
import Provider from '../components/Provider'
import SwipeToSlide from '../components/Slider'

const Favorites = ({ favorites }) => {
  return (
    <div>
      {/*<SwipeToSlide />*/}
        {favorites.map((center, idx) => <Provider key={idx} index={idx} provider={center}/>)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  favorites: state.dayheart.providers.favorites.data
})

export default connect(mapStateToProps)(Favorites)
