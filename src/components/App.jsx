import React, { Component } from 'react';
import '../styles/App.scss';

import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import ghpages from '../gh-pages.json';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <NavBar ghpages={ ghpages.projects } />
      </div>
    );
  }
}
