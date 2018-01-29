import React from 'react';
import '../styles/index.css'
import Toolbar from '../components/Toolbar'
import Favorites from '../components/Favorites'
import Search from '../components/Search'

const Welcome = ({}) => (
  <main>
   <Toolbar />
   <Favorites />
   <Search />
  </main>
)

export default Welcome
