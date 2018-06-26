import React, { Component } from 'react';
import '../styles/Header.scss';

import GitHubLogo from '../assets/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div id='Header'>
        <div className='Header-Title'>
          <span>
            <span className='Title-Partial'>nhult.github.i{/* N.H. Portfoli */}</span>
            <span className='Title-Full'>o</span>
            <a target='_blank' href='https://github.com/nhult'><img className='Header-Title-GitHub__icon' src={ GitHubLogo } alt='GitHub-Logo' /></a>
          </span>
        </div>
      </div>
    );
  }
}
