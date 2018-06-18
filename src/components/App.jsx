import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Grid from './Grid.jsx'
import '../styles/App.scss';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <header>
          <Link to='/'><h1>nhult (this is not pretty)</h1></Link>
          <hr />
        </header>

        <Grid />
      </div>
    );
  }
}
