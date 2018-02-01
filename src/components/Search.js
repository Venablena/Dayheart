import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Form, Container, Segment, Button } from 'semantic-ui-react'
import { getProviders } from '../actions'
import { withRouter } from 'react-router-dom'
import { LocalForm, Control } from 'react-redux-form'

const Search = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    props.getProviders()
    props.history.push('/map')
  }

  return (
    <main>
    <LocalForm>
      <label>1 Child</label>
              <Control.radio model='infant' />
              <Control.radio model='toddler' />
            <Control.radio model='pre-school' />
            <Control.radio model='school age' />
    </LocalForm>

        <Button.Group fluid color='olive'>
         <Button>Full-time</Button>
         <Button>Part-time</Button>
        </Button.Group>

        <Button.Group fluid color='olive'>
          <Button disabled>Starting</Button>
          <Button>Now</Button>
          <Button>Date</Button>
        </Button.Group>

        <Segment.Group horizontal>
         <Segment>Type of facility</Segment>
         <Segment>Center</Segment>
         <Segment>Family</Segment>
         <Segment>Preschool</Segment>
        </Segment.Group>

        <Segment.Group horizontal>
         <Segment>Clear</Segment>
         <Segment className='orange inverted'>
          <Button type='submit'>Search</Button>
         </Segment>
         <Segment></Segment>
        </Segment.Group>
      </main>
  );
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getProviders }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
