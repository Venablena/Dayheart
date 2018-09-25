import React, { Fragment } from 'react';
import { Card } from 'semantic-ui-react';

const ProviderNotLoggedIn = () => (
  <Fragment>
    <Card.Meta>
       <div className= 'card_subtitle'>
         Log in to get more detailed information about child care providers.
       </div>
    </Card.Meta>
  </Fragment>
);

export default ProviderNotLoggedIn;
