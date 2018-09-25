import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import Provider from '../containers/Provider';
import Toolbar from '../containers/Toolbar';

import { getProviders } from "../selectors";

const List = ({ providers }) => {
  return (
    <main>
      <Toolbar redirect= 'map'/>
      <div className='wrapper'>
        <Card.Group>
          { providers.map((el, idx) => <Provider key={ idx } provider={ el }/>) }
        </Card.Group>
      </div>
    </main>
)}

const mapStateToProps = (state) => ({
  providers: getProviders(state)
})

export default connect(mapStateToProps)(List);
