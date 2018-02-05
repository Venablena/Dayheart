import React, { Component } from 'react';
import { connect } from 'react-redux'
import Provider from '../components/Provider'
import Slider from 'react-slick'

class CustomSlide extends Component {
  render() {
    const {index, ...props} = this.props
    return (
      <div {...props}><h3>{index}</h3></div>
    )
  }
}

class Favorites extends Component {
  render(){
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: this.props.favorites.length,
    };
    return (
      <Slider {...settings}>

          {this.props.favorites.map((center, idx) => <Provider key={idx} index={idx} provider={center}/>)}

      </Slider>
    )
  }
}

const mapStateToProps = (state) => ({
  favorites: state.dayheart.providers.favorites.data
})

export default connect(mapStateToProps)(Favorites)
