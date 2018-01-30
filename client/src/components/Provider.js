import React from 'react';
import { Container, Segment, Icon } from 'semantic-ui-react'

const Provider = ({ provider }) => {
console.log('Provider props:', provider);
  return (
    <Container>
      <Segment.Group horizontal>
        <Segment color='olive'><h4>{ provider.name }</h4>
          <p>{ provider.type }</p>
          <p>{ provider.ages }</p>
          <p>{ provider.address }</p>
        </Segment>
        <Segment compact>
          <Icon name='heart outline' size='large' />
        </Segment>
      </Segment.Group>
    </Container>
);}

export default Provider;

// List View
// Facility Name
// Ages Served
// Type of Facility
//
// center detail view
// Type of facility
// Current vacancies
// Hours
// Schedule (Full Day, Part Day, Full Time, Part Time) uncollapse other Options
// Ages Served
// Capacity
// Licensing Status: Provider ID link to Child Care Check website
// Early Achievers Rating
// Longer Description (Substitute short description)
// Unciollapse other categories detailed in above
