import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Form, Container, Segment, Button } from 'semantic-ui-react'
import { getProviders } from '../actions'

const Search = ({ getProviders }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    getProviders()
  }

  return (
    <Container>
      <Form name="searchForm" onSubmit={ handleSubmit }>

        <Form.Field>
          <Form.Input label='Search near' placeholder="Enter zip code" />
        </Form.Field>

        <Segment>
          <Form.Group inline>
           <label>1 Child</label>
              <Form.Radio value='infant' label='infant'/>
              <Form.Radio value='toddler' label='toddler' />
              <Form.Radio value='pre-school' label='pre-school' />
              <Form.Radio value='school age' label='school age' />
          </Form.Group>
        </Segment>

        <Segment>
          Add Children
        </Segment>

        <Segment.Group horizontal>
         <Segment>Full-time</Segment>
         <Segment>Part-time</Segment>
        </Segment.Group>

        <Segment.Group horizontal>
          <Segment>Starting</Segment>
          <Segment>Now</Segment>
          <Segment>Date</Segment>
        </Segment.Group>

        <Segment.Group horizontal>
         <Segment>Clear</Segment>
         <Segment className='orange inverted'><Button type='submit'><a href='/map'>Search</a></Button></Segment>
         <Segment></Segment>
        </Segment.Group>

      </Form>
    </Container>
  );
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getProviders }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
