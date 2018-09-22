import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Slider from 'react-slick';
import NoFavoritesView from '../components/NoFavoritesView';
import Provider from './Provider';

import {
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
    return this.props.favorites.map((el, idx) => <CustomSlide key={idx} provider={el}/>)
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
      <Fragment>
        { !isLoaded ?
          <div>'Loading'</div>
          :
          !favorites.length ?
          <NoFavoritesView/>
          :
           <Slider { ...settings }>
             { this.renderFavorites() }
           </Slider>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  favorites: getAllFavorites(state),
  isLoaded: favoritesAreLoaded(state),
})

export default connect(mapStateToProps)(Favorites, CustomSlide);
