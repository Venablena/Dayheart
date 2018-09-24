import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import Provider from './Provider';

import { getFavoritesById } from '../selectors';
//Custom slide makes it possible to pass a react component into the slider by adding the right information from the props into the surrounding div
class CustomSlide extends Component {
  render() {
    const { provider, ...props } = this.props
    return (
      <div { ...props }>
        <Provider provider={provider}/>
      </div>
    )
  }
}

class SwipeToSlide extends Component {
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

    return (
      <div>
        <Slider { ...settings }>
          { this.renderFavorites() }
        </Slider>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  favorites: state.dayheart.providers.favorites.data,
  favoritesById: getFavoritesById(state),
})
export default connect(mapStateToProps)(SwipeToSlide, CustomSlide)
