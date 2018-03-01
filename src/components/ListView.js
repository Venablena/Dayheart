import React from 'react';
import Provider from '../containers/Provider'
import Toolbar from './Toolbar'
import { Card } from 'semantic-ui-react'

const List = ({ providers, user }) => {

  return (
    <main>
      <Toolbar redirect= 'map'/>
      <div className='wrapper'>
        <Card.Group>
          { providers.map((center, idx) => <Provider key={ idx } provider={ center }/>) }
        </Card.Group>
      </div>
    </main>
)}

export default List;
