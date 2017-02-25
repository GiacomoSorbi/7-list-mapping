import React, { Component } from 'react';
class MenuBar extends Component {



  render() {
    return (
      <ul>
        {this.props.items.map((item, key) => 
          <li className={item.classes}>
            <button
              className='menu-button'
              onClick={item.action}
              disabled={item.status === 'disabled'}
            >
              {item.title}
            </button>
          </li>
        )}
      </ul>
    );
  }
}

export default MenuBar;
