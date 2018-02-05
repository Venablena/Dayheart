import React, { Component } from 'react'
import Slider from 'react-slick'
import { connect } from 'react-redux'
import Provider from './Provider'

class CustomSlide extends Component {

  render() {
    const {...props} = this.props
    return (
      <div {...props}>
        <Provider />
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
    return this.props.favorites.map((center, idx) => <Provider key={idx} data-index={idx} provider={center}/>)
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
         <CustomSlide />
        </Slider>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  favorites: state.dayheart.providers.favorites.data
})
export default connect(mapStateToProps)(SwipeToSlide, CustomSlide)
