import React, { Component } from 'react';
import '../styles/NavBar.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  showProject = (e) => {
    e.target.id === '' ?
      this.props.onProjectSelected(e.target.parentNode.id):
      this.props.onProjectSelected(e.target.id);
  }

  render() {
    return (
      <div className='NavBar'>
        {
          this.props.ghpages.map((item, index) => {
            return (
              <div className={this.props.indexSelected == index ? ['NavBar__item', 'item__selected'].join(' ') : 'NavBar__item'} id={'index_' + index} onClick={ (e) => this.showProject(e) } key={ index } >
                <span>{ item.name }</span>
                {/*<a target='' href=''><img src='' alt={'gh-pages_' + item.name.split(' ').join('_') } /></a>*/}
              </div>
          );
          })
        }
      </div>
    );
  }
}
