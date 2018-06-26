import React, { Component } from 'react';
import '../styles/Intro.scss';

export default class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = this.props.projectSelected == null ? 'Select a project above' : this.props.projectSelected.name;
    const repository = this.props.projectSelected == null ? '' : this.props.projectSelected.repository;
    const snippet = this.props.projectSelected == null ? '' : this.props.projectSelected.snippet;

    return (
      <main className='Intro'>
        <h1 className='Intro-Header-Title'>{ title }</h1>
        <div className='Intro-Project-Snippet'>
          <p>{ snippet }</p>
          { snippet ? <a target='_blank' href={'http://nhult.github.io/' + repository}><span>(Try it here!)</span></a> : '' }
        </div>
      </main>
    );
  }
}
