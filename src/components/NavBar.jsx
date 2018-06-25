import React, { Component } from 'react';
import '../styles/NavBar.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  showProject = (index) => {
    console.log(index)
  }

  render() {
    return (
      <div className='NavBar'>
        {
          this.props.ghpages.map((item, index) => {
            return (
              <div className='NavBar__item' id={'index_' + index} onClick={ (e) => this.showProject(e.target.id) } key={ index } >
                <span>{ item.name }</span>
                <a target='' href=''><img src='' alt={'gh-pages_' + item.name.split(' ').join('_') } /></a>
              </div>
          );
          })
        }
      </div>
    );
  }
}
