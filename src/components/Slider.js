import React, { Component } from 'react'
import Slider from 'react-slick'
import { connect } from 'react-redux'
import Provider from './Provider'

class CustomSlide extends Component {

  render() {
    const {provider, ...props} = this.props
    return (
      <div {...props}>
        <Provider provider={ provider }/>
      </div>
    )
  }
}

class SwipeToSlide extends Component {
  constructor(props) {
    super(props)
    this.renderFavorites = this.renderFavorites.bind(this)
  }

  renderFavorites = () => {
    return this.props.favorites.map((center, idx) => <CustomSlide key={idx} provider={center}/>)
  }

  render() {
    const settings = {
      className: 'center',
      infinite: false,
      centerPadding: '60px',
      slidesToShow: 1,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
      }
    };

    return (
      <div>
        <Slider {...settings}>
          { this.renderFavorites() }
        </Slider>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  favorites: state.dayheart.providers.favorites.data
})
export default connect(mapStateToProps)(SwipeToSlide, CustomSlide)
