/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Navbar} from 'react-bootstrap';
import Link from '../Link';
import s from './Header.css';
import Navigation from '../Navigation';
import LanguageSwitcher from '../LanguageSwitcher';
import logoUrl from './logo-small.png';

const messages = defineMessages({
  brand: {
    id: 'header.brand',
    defaultMessage: 'Your Company Brand',
    description: 'Brand name displayed in header',
  },
});

function Header() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img src={logoUrl} width="20" height="20" alt="React"/>
            <FormattedMessage {...messages.brand}/>
          </Link>
          <LanguageSwitcher/>
        </Navbar.Brand>
      </Navbar.Header>
      <Navigation/>
    </Navbar>
  );
}

export default injectIntl(withStyles(s)(Header));
