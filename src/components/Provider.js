import React from 'react';
import { Container, Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { toggleOverlay } from '../actions'

const Provider = ({ provider, isActive, toggleOverlay }) => {

  const handleClick = () => {
    toggleOverlay(false)
  }

  return (
    <Container>
      <Segment.Group horizontal>
        <Segment textAlign='left' color='olive'>
          <Link to={ `/providers/${ provider.id }`}>
            <h4>{ provider.name }</h4>
            <p>{ provider.type }</p>
            <p>{ provider.ages }</p>
            <p>{ provider.address }</p>
          </Link>
        </Segment>
        <Segment.Group compact textAlign='right'>
          <Segment>
            <Icon name='heart outline' size='large' />
          </Segment>
          <Segment>
            { isActive ? (<Icon name='close' size='large' onClick={handleClick}/>) : null}
          </Segment>
        </Segment.Group>
      </Segment.Group>
    </Container>
);}

const mapStateToProps = (state) => ({
  overlay: state.dayheart.toggleOverlay
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleOverlay }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Provider)


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
