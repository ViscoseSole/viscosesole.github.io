import React, { Component } from 'react';
import '../styles/App.scss';

import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import Intro from './Intro.jsx';
import ghpages from '../gh-pages.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectSelected: null

    }
  }

  selectProject = (index) => {
    let indexSelected = Number(index.split('_')[1]);

    indexSelected == this.state.projectSelected ?
      this.setState({projectSelected: null}) :
      this.setState({projectSelected: indexSelected});
  }

  render() {
    return (
      <div>
        <Header />
        <NavBar ghpages={ ghpages.projects } onProjectSelected={ this.selectProject } indexSelected={ this.state.projectSelected } />
        {
          this.state.projectSelected !== null ?
          (<Intro projectSelected={ ghpages.projects[this.state.projectSelected] } />) :
          (<Intro projectSelected={ null } />)
        }
      </div>
    );
  }
}
