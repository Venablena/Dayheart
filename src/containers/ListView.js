import React from 'react';
import Provider from '../components/Provider'
import Toolbar from '../components/Toolbar'
import Infobar from '../components/Infobar'
import { Card } from 'semantic-ui-react'

const List = ({providers, user}) => {

  return (
    <main>
      <Toolbar />
      <div className='wrapper'>
        <Card.Group>
          {providers.map((center, idx) => <Provider key={idx} provider={center}/>)}
        </Card.Group>
      </div>
    </main>
)}

export default List;
