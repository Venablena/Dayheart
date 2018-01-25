import React from 'react';
import '../styles/index.css'
import { Link } from 'react-router-dom'

const Home = ({}) => (
  <main>
    <div className="App-header">
      <img src='./DayHeart_logo_192.png' className="App-logo" alt="logo" />
      <p className="App-intro">
        Find a childcare provider near you.
      </p>
    </div>
    <button>
      <Link to="/search">Search</Link>
    </button>
    <button>
      <Link to="/login">Log in</Link>
    </button>
  </main>
);

export default Home;
