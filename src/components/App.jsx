import React, { Component } from 'react';
import '../styles/App.scss';

import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import Intro from './Intro.jsx';
import AboutMe from './AboutMe.jsx';
import ghpages from '../gh-pages.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectSelected: null,
      showAbout: false
    }
  }

  selectProject = (index) => {
    let indexSelected = Number(index.split('_')[1]);
    indexSelected == this.state.projectSelected ?
      this.setState({projectSelected: null}) :
      this.setState({projectSelected: indexSelected, showAbout: false});
  }

  toggleAbout = () => {
    this.state.projectSelected != null ?
    (this.setState({ showAbout: !this.state.showAbout, projectSelected: null })) :
    this.setState({ showAbout: !this.state.showAbout });
  }

  render() {
    return (
      <div>
        <Header onToggle={ this.toggleAbout } />
        <NavBar ghpages={ ghpages.projects } onProjectSelected={ this.selectProject } indexSelected={ this.state.projectSelected } />
        {
          this.state.projectSelected !== null ?
          (<Intro projectSelected={ ghpages.projects[this.state.projectSelected] } />) :
          (this.state.showAbout ? false : <Intro projectSelected={ null } />)
        }
        {
          this.state.showAbout ?
          (this.state.projectSelected === null ? <AboutMe /> : false) : false
        }
      </div>
    );
  }
}
