import React from 'react';
//? import '../styles/index.css'
import Toolbar from '../containers/Toolbar'
import Favorites from '../containers/Favorites'
import Search from '../containers/Search'

import { connect } from 'react-redux'

const Welcome = () => {
  return(
    <main>
      <Toolbar redirect= ''/>
      <div className= 'wrapper'>
        <Favorites />
        <Search />
      </div>
    </main>
  )
}

export default Welcome
