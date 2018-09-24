import React from 'react';

import Toolbar from '../containers/Toolbar';
import Favorites from '../containers/Favorites';
import Search from '../containers/Search';

const Welcome = () => {
  return(
    <main>
      <Toolbar redirect= ''/>
      <div className= 'wrapper'>
        <Favorites />
        <Search />
      </div>
    </main>
  );
}

export default Welcome;
