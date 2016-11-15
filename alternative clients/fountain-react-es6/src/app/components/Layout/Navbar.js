import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router';

class Navbar extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item as={Link} to=''>
          Homepage
        </Menu.Item>
        <Menu.Item as={Link} to='/tasks'>
          Tasks
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;

