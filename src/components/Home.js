import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Divider, Popup } from 'semantic-ui-react';
import Header from './Header';

const Home = () => {
  const searchBar = (
    <Input
      transparent
      icon= 'search'
      placeholder="Enter zip code" />
  )

  return (
    <main className= 'centered'>
      <Header />
      <div className= 'wrapper'>
        <h4> Find a child care provider near you</h4>
        <Popup
          trigger={ searchBar }
          on='focus'
          content='Curently only zip code 98108 has data'
          hideOnScroll
          position='right center'
        />
        <Divider hidden />
        <Link to="/map">
          <Button className='orange' content="Search" />
        </Link>
        <Divider hidden />
        <Link to="/login">
          <Button className='blue'>Log in</Button>
        </Link>
      </div>
    </main>
  )
};

export default Home;
