import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const NoFavoritesView = () => (
  <Card fluid>
    <Card.Content>
        <Image
          floated= 'left'
          size= 'small'
          src= { '/DayHeart_logo_192.png' }/>
         <Card.Header>
          Welcome!
         </Card.Header>
         <Card.Description>
          You have no favorites yet. Go ahead and search for providers.
        </Card.Description>
     </Card.Content>
   </Card>
);

export default NoFavoritesView;
