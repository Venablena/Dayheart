import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'

import Slider from 'react-slick'
import { Card, Image } from 'semantic-ui-react'

import Provider from './Provider'
import {
  getFavoritesById,
  getAllFavorites,
  favoritesAreLoaded,
} from '../selectors'

class CustomSlide extends Component {
  render() {
    const { provider, ...props } = this.props
    return (
      <div { ...props }>
        <Provider provider={ provider }/>
      </div>
    )
  }
}

class Favorites extends Component {

  renderFavorites = () => {
    return this.props.favorites.map((center, idx) => <CustomSlide key={idx} provider={center}/>)
  }

  render() {
    const settings = {
      className: 'center',
      infinite: false,
      centerPadding: '60px',
      slidesToShow: 1,
      swipeToSlide: true
    };

    const {
      favorites,
      favoritesById,
      isLoaded,
    } = this.props;

    return (
      <div>
        { !isLoaded ?
          'Loading' :
          !favorites.length ?
          <Card fluid>
            <Card.Content>
                <Image
                  floated= 'left'
                  size= 'small'
                  src= { '/DayHeart_logo_192.png' }/>
                 <Card.Header>
                  Welcome!
                 </Card.Header>
             </Card.Content>
           </Card> :
           <Slider { ...settings }>
             { this.renderFavorites() }
           </Slider>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  favorites: getAllFavorites(state),
  isLoaded: favoritesAreLoaded(state),
  favoritesById: getFavoritesById(state),
})

export default connect(mapStateToProps)(Favorites, CustomSlide);
