/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {PropTypes} from 'react';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import {defineMessages, FormattedMessage} from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';

const messages = defineMessages({
  about: {
    id: 'navigation.about',
    defaultMessage: 'About',
    description: 'About link in header',
  },
  contact: {
    id: 'navigation.contact',
    defaultMessage: 'Contact',
    description: 'Contact link in header',
  },
  login: {
    id: 'navigation.login',
    defaultMessage: 'Log in',
    description: 'Log in link in header',
  },
  or: {
    id: 'navigation.separator.or',
    defaultMessage: 'or',
    description: 'Last separator in list, lowercase "or"',
  },
  signup: {
    id: 'navigation.signup',
    defaultMessage: 'Sign up',
    description: 'Sign up link in header',
  },
});

function Navigation() {
  return (
    <div>
      <Nav>
        <NavItem eventKey={1} href="/bookings">Bookings</NavItem>
        <NavItem eventKey={2} href="/customers">Customers</NavItem>
        <NavItem eventKey={3} href="/new-booking">New booking</NavItem>
        <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={4.1}>Action</MenuItem>
          <MenuItem eventKey={4.2}>Another action</MenuItem>
          <MenuItem eventKey={4.3}>Something else here</MenuItem>
          <MenuItem divider/>
          <MenuItem eventKey={4.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem href="/login">
          <FormattedMessage {...messages.login}/>
        </NavItem>
        <NavItem href="/register">
          <FormattedMessage {...messages.signup}/>
        </NavItem>
      </Nav>
    </div>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};

export default withStyles(s)(Navigation);
