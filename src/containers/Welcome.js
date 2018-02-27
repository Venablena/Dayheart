import React from 'react';
import '../styles/index.css'
import Toolbar from '../components/Toolbar'
import Favorites from '../components/Favorites'
import Search from './Search'
import { Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Welcome = ({ favorites }) => (
  <main>
   <Toolbar redirect= ''/>
   <div className= 'wrapper'>
   { favorites.length ?
     <Favorites /> :
       <Card fluid>
         <Card.Content>
             <Image
               floated='left'
               size='small'
               src={'/DayHeart_logo_192.png'}/>
              <Card.Header>
                You don't have any favorites yet.
              </Card.Header>
          </Card.Content>
        </Card> }
       <Search />
     </div>
  </main>
)

const mapStateToProps = (state) => ({
  favorites: state.dayheart.providers.favorites.data
})

export default connect(mapStateToProps)(Welcome)
