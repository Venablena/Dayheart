import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src='./DayHeart_logo_192.png' className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/welcome">Welcome</Link>
      </p>
      <p>
        <Link to="/map">Map</Link>
      </p>
    </div>
);

const Home = (props) => (
  <Page title="Home"/>
);

const Welcome = (props) => (
  <Page title="Welcome"/>
);

const Map = (props) => (
  <Page title="Map"/>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/about" component={Welcome}/>
          <Route path="/map" component={Map}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
