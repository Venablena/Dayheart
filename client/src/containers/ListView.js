import React from 'react';
import Provider from '../components/Provider'
import Toolbar from '../components/Toolbar'
import Infobar from '../components/Infobar'

const List = ({providers, user}) => {
  console.log('list props:', providers, user);
  return (
    <main>
      <Toolbar />
      <Infobar />
    {providers.map((center, idx) => <Provider key={idx} provider={center}/>)}
    </main>
);}

export default List;
