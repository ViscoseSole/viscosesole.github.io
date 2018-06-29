import React, { Component } from 'react';
import '../styles/AboutMe.scss';

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='AboutMe'>
        <h1>Hello!</h1>
        <p>I'm an aspiring developer from Finland.</p>
      </div>
    );
  }
}
