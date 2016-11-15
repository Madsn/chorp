import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';

class Navbar extends Component {
  state = {};

  render() {
    const items = [
      {active: true, name: 'Homepage', link: '/'},
      {name: 'Tasks', link: '/tasks'}
    ];

    return <Menu items={items}/>
  }
}

export default Navbar;

