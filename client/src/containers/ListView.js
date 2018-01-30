import React from 'react';
import Provider from '../components/Provider'

const List = ({providers, user}) => {
  console.log('list props:', providers, user);
  return (
    <main>
    {providers.map((center, idx) => <Provider key={idx} provider={center}/>)}
    </main>
);}

export default List;
