/**
*
* Navbar
*
*/

import React from 'react';
import AppBar from 'material-ui/AppBar';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Navbar() {
  return (
    <AppBar
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  );
}

export default Navbar;
