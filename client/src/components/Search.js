import React from 'react';
import { Form, Container, Segment } from 'semantic-ui-react'

const Search = ({}) => {

  const handleSubmit = (e) => e.preventDefault()

  return (
    <Container>
      <Form onSubmit={ handleSubmit }>

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
         <Segment className='orange inverted'>Search</Segment>
         <Segment></Segment>
        </Segment.Group>

      </Form>
    </Container>
  );
}

export default Search;
