import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Slider from 'react-slick';
import { isEmpty, forEach } from 'lodash';

import NoFavoritesView from '../components/NoFavoritesView';
import Provider from './Provider';

import {
  getAllFavorites,
  favoritesAreLoaded,
  getFavoritesById
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
    // return forEach(this.props.favoritesById, (el, idx) => {
    //     // <CustomSlide key={idx} provider={el}/>
    //     console.log(el);
    // })
    console.log("favoritesById: ", this.props.favoritesById);
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
          isEmpty(favoritesById) ?
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
  favoritesById: getFavoritesById(state),
})

export default connect(mapStateToProps)(Favorites, CustomSlide);
