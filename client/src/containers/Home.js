import React from 'react';
import '../styles/index.css'
import { Link } from 'react-router-dom'
import { Button, Form, Segment, Container } from 'semantic-ui-react'

const Home = ({}) => (
  <main>
    <div className="App-header">
      <img src='./DayHeart_logo_192.png' className="App-logo" alt="logo" />
      <p>
        Find a childcare provider near you.
      </p>
    </div>
    <Container>
      <Form>
        <Form.Field>
          <input placeholder="Enter zip code" />
        </Form.Field>
        <Form.Group inline>
         <label>Radius</label>
            <Form.Radio value='5 miles' label='5 miles'/>
            <Form.Radio value='10 miles' label='10 miles' />
            <Form.Radio value='15 miles' label='15 miles' />
            <Form.Radio value='20 miles' label='20 miles' />
        </Form.Group>
      </Form>
        <Button className='orange'>
          <Link to="/search">Search</Link>
        </Button>
        <Button className='orange'>
          <Link to="/login">Log in</Link>
        </Button>
    </Container>
  </main>
);

export default Home;
