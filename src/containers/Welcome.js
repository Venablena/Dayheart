import React from 'react';
import '../styles/index.css'
import Toolbar from '../components/Toolbar'
import Favorites from '../components/Favorites'
import Search from '../components/Search'
import { Container } from 'semantic-ui-react'

const Welcome = ({}) => (
  <main>
   <Toolbar />
   <div className= 'wrapper'>
     <Favorites />
     <Search />
   </div>
  </main>
)

export default Welcome
