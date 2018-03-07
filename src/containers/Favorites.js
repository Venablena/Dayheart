import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import Provider from './Provider'
//Connect to Firebase
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

import Slider from 'react-slick'
import { Card, Image } from 'semantic-ui-react'

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

  // const placeholder = !isLoaded(favorites) ?
  //   'Loading' :
  //   isEmpty( favorites ) ?
  //   'Welcome!'

  // favoritesList = !isLoaded(favorites)
  //   ? 'Loading'
  //   : isEmpty( favorites )
  //     ? 'Welcome!'
  //     : Object.keys(favorites).map(
  //         (key, id) => (
  //           <TodoItem key={key} id={id} todo={ favorites [key]}/>
  //         )
  //       )

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
        { !isLoaded( this.props.favorites ) ?
          'Loading' :
          isEmpty( this.props.favorites ) ?
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
  favorites: state.dayheart.providers.favorites.data
})

export default compose(
  firebaseConnect(['favorites']),
  connect(mapStateToProps))(Favorites, CustomSlide)
