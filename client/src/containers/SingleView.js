import React from 'react';
import Toolbar from '../components/Toolbar'
import Provider from '../components/Provider'
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Single = (props) => {
  console.log(props);
  const provider = props.provider
  return (
    <main>
      <Toolbar />
      <Provider provider={provider} />
      <Segment>
        { provider.description }
      </Segment>
      <Segment.Group horizontal>
        <Segment compact>Opening hours</Segment>
        <Segment>{ provider.hours }</Segment>
      </Segment.Group>
      <Segment.Group horizontal>
        <Segment compact>Full or Half days?</Segment>
        <Segment>{ provider.schedule_daily }</Segment>
      </Segment.Group>
      <Segment.Group horizontal>
        <Segment compact>Part or Full-time?</Segment>
        <Segment>{ provider.schedule_weekly  }</Segment>
      </Segment.Group>
      <Segment.Group horizontal>
        <Segment compact>Ages served</Segment>
        <Segment>{ provider.start_age  } - { provider.end_age }</Segment>
      </Segment.Group>
      <Segment.Group horizontal>
        <Segment compact>Max. Capacity</Segment>
        <Segment>{ provider.capacity  }</Segment>
      </Segment.Group>
      <Segment.Group horizontal>
        <Segment compact>Tuition</Segment>
        <Segment>{ provider.tuition  }</Segment>
      </Segment.Group>
      <Segment.Group horizontal>
        <Segment compact>Early Achiever's Rating</Segment>
        <Segment>{ provider.early_achievers  }</Segment>
      </Segment.Group>
      <Segment.Group horizontal>
        <Segment compact>Waitlist</Segment>
        <Segment>{ provider.waitlist  }</Segment>
        <Segment compact>Waitlist Fee</Segment>
        <Segment>{ provider.waitlist_fee  }</Segment>
      </Segment.Group>
      <Segment><a href={`https://apps.del.wa.gov/Check/LicenseView.aspx?id=-${.envprovider.id}`}>Licensing Status</a></Segment>
    </main>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { provider: state.dayheart.providers.all.filter((el)=> el.id == ownProps.match.params.providerId)[0] }
}

export default connect(mapStateToProps)(Single)
