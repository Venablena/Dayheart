import React from 'react';
import '../styles/index.css'
import { Link } from 'react-router-dom'
import { Button, Form, Container } from 'semantic-ui-react'
import Header from '../components/Header'

const Home = ({}) => (
  <main>
    <Header />
    <Container className= 'container'>
      <Form>
        <Form.Field>
          <Form.Input placeholder="Enter zip code" />
        </Form.Field>
        <Form.Group inline>
         <label>Radius</label>
            <Form.Radio value='5 miles' label='5 miles'/>
            <Form.Radio value='10 miles' label='10 miles' />
            <Form.Radio value='15 miles' label='15 miles' />
            <Form.Radio value='20 miles' label='20 miles' />
        </Form.Group>
        <Form.Button className='orange'>
          <Link to="/map">Search</Link>
        </Form.Button>
      </Form>
        <Button className='orange'>
          <Link to="/login">Log in</Link>
        </Button>
    </Container>
  </main>
);

export default Home;
