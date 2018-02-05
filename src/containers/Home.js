import React from 'react';
import '../styles/index.css'
import { Link } from 'react-router-dom'
import { Button, Form, Container } from 'semantic-ui-react'
import Header from '../components/Header'

const Home = ({}) => (
  <main className= 'centered'>
    <Header />
    <div className= 'wrapper'>
      <Form>
        <Form.Field>
        <label> Find a child care provider near you</label>
          <Form.Input placeholder="Enter zip code" />
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
        <Link to="/map">Search</Link>
      </Button>
      <div className= 'buffer'></div>
      <Button className='blue'>
        <Link to="/login">Log in</Link>
      </Button>
    </div>
  </main>
);

export default Home;
