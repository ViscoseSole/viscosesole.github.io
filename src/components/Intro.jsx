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
        <div className='Intro-Header-Title'>
          <h1>{ title }</h1>
          { snippet ? <a target='_blank' href={'http://nhult.github.io/' + repository}><span> Try it here!</span></a> : '' }
        </div>
        {
          this.props.projectSelected !== null ?
          (
            <div className='Intro-Project-Snippet'>
            <h4>What is it? </h4>
            <p>{ snippet }</p>
          </div>
        ) : false
        }
      </main>
    );
  }
}
