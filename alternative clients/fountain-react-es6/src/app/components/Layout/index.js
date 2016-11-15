import React, {Children, PropTypes} from 'react';
import Navbar from './Navbar';

function Layout({children}) {
  return (
    <div>
      <Navbar/>
      {Children.only(children)}
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.element.isRequired
};
export default Layout;
