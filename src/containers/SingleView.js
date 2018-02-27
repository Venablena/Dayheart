import React from 'react';
import Toolbar from '../components/Toolbar'
import Provider from './Provider'
import { Segment, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import _ from 'lodash'

const formatTuition = (array) => {
  let result = ''
   return array.map(el => {
     for(let key in el) console.log(el[key])
   })
}

const Single = ({ provider }) => {
  if (!provider) return (<div>Loading...</div>)
  return (
    <main>
      <Toolbar />

      <div className= 'wrapper'>
        <Provider provider={provider} />
        <Card fluid color='olive'>
          <Card.Content extra>
           { provider.description }
          </Card.Content>
        </Card>

        <Segment.Group horizontal>
          <Segment compact>Ages</Segment>
          <Segment>{ provider.start_age  } - { provider.end_age }</Segment>
        </Segment.Group>

        <Segment.Group horizontal>
          <Segment compact>Full-time</Segment>
          <Segment>{ provider.full_time ? 'yes' : 'no' }</Segment>
          <Segment>{ provider.full_day ? 'Full days' : 'Half days' }</Segment>
        </Segment.Group>

        <Segment.Group horizontal>
          <Segment compact>Part-time</Segment>
          <Segment>{ provider.part_time ? 'yes' : 'no' }</Segment>
          <Segment>{ provider.part_day ? 'Half days' : 'Full days' }</Segment>
        </Segment.Group>

        <Segment.Group horizontal>
          <Segment compact>Open</Segment>
          <Segment>{ provider.hours }</Segment>
          <Segment compact>Capacity</Segment>
          <Segment>{ provider.capacity  }</Segment>
        </Segment.Group>
        { provider.philosophy ?
          <Segment.Group horizontal>
            <Segment compact>Philosophy</Segment>
            <Segment>{ provider.philosophy  }</Segment>
          </Segment.Group>
          : null }

        { provider.special_focus ?
          <Segment.Group horizontal>
            <Segment compact>Special focus</Segment>
            <Segment>{ provider.special_focus }</Segment>
          </Segment.Group>
          : null }

        { provider.additional_care ?
          <Segment.Group horizontal>
            <Segment compact>Additional care</Segment>
            <Segment>{ provider.additional_care }</Segment>
          </Segment.Group>
          : null }

        <Segment.Group horizontal>
          <Segment compact>Meals</Segment>
          <Segment>{ provider.meals ? ( provider.meals ) : 'no' }</Segment>
          <Segment compact>Cloth diapers</Segment>
          <Segment>{ provider.cloth_diapers ? 'yes' : 'no' }</Segment>
        </Segment.Group>
        { provider.meals ?
        <Segment.Group horizontal>
          <Segment compact>Special diets </Segment>
          <Segment>
            <span>{ provider.diet_halal ? 'halal ' : '' }</span>
            <span>{ provider.diet_kosher ? 'kosher ' : '' }</span>
            <span>{ provider.diet_vegetarian ? 'vegetarian ' : '' }</span>
            <span>{ provider.diet_vegan ? 'vegan ' : '' }</span>
            <span>{ provider.diet_nutFree ? 'nut free ' : '' }</span>
            <span>{ provider.diet_other ? 'other ' : '' }</span>
          </Segment>
        </Segment.Group>
          : null }

        <Segment.Group horizontal>
          <Segment compact>Toilet training</Segment>
          <Segment>{ provider.toilet_training ? ( provider.toilet_training ): 'N/A'  }</Segment>
        </Segment.Group>

        <Segment.Group horizontal>
          <Segment compact>Early Achiever's Rating</Segment>
          <Segment>{ provider.early_achievers  }</Segment>
        </Segment.Group>

        <Segment.Group horizontal>
          <Segment compact>Waitlist</Segment>
          <Segment>{ provider.waitlist ? 'yes' : 'no' }</Segment>
          <Segment compact>Waitlist Fee</Segment>
          <Segment>{ provider.waitlist_fee ? 'yes' : 'no' }</Segment>
        </Segment.Group>

        <Segment.Group>
          <Segment  color= 'olive' textAlign='center'>Tel. { provider.phone }</Segment>
          <Segment textAlign='center'>{ provider.contact }</Segment>
          { provider.email ?
            <Segment textAlign='center'>{ provider.email }</Segment>
          : null }
        </Segment.Group>

        <Segment.Group>
          <Segment textAlign='center'><a href={`https://apps.del.wa.gov/Check/LicenseView.aspx?id=-${ provider.id }`}>Licensing Status</a></Segment>
        </Segment.Group>
      </div>
    </main>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { provider: state.dayheart.providers.all.filter((el)=> el.id == ownProps.match.params.providerId)[0] }
}

export default connect(mapStateToProps)(Single)
