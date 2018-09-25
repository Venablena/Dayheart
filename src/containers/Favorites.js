import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { isEmpty } from 'lodash';

import NoFavoritesView from '../components/NoFavoritesView';
import Provider from './Provider';

import {
  getFavoritesArray,
  favoritesAreLoaded,
  getFavoritesById
} from '../selectors';

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
    const { favorites } = this.props;
    return favorites.map((el, idx) => <CustomSlide key={idx} provider={el}/>)
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
          isEmpty(favorites) ?
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
  favorites: getFavoritesArray(state),
  isLoaded: favoritesAreLoaded(state),
})

export default connect(mapStateToProps)(Favorites, CustomSlide);
