/**
*
* Navbar
*
*/

import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import A from '../A';

import styles from './styles.css';

function Navbar() {
  return (
    <AppBar
      title={<FormattedMessage {...messages.title} />}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      iconElementRight={<FlatButton label={<A href="/tasks"> <FormattedMessage {...messages.tasks} /></A>}/>}
    />
  );
}

export default Navbar;
