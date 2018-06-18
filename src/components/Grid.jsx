import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../styles/Grid.scss';

export default class Grid extends Component {
  render() {
    return (
      <div className='Grid'>
        <div className="Cell"><Link to='kando'>@kando</Link></div>
        <div className="Cell"><Link to='simon-says'>@simon-says</Link></div>
        <div className="Cell"><Link to='recipe-box'>@recipe-box</Link></div>
      </div>
    );
  }
}
