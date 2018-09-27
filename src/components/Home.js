import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Divider, Popup } from 'semantic-ui-react';
import Header from './Header';
import SearchInput from './SearchInput';

const Home = () => {
  return (
    <main className= 'centered'>
      <Header />
      <div className= 'wrapper'>
        <h4> Find a child care provider near you</h4>
        { <SearchInput /> }
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
