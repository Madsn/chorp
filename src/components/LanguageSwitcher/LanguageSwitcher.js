/* eslint-disable no-shadow */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {setLocale} from '../../actions/intl';

function LanguageSwitcher({currentLocale, availableLocales, setLocale}) {
  const isSelected = locale => locale === currentLocale;
  if (availableLocales.length > 1) {
    return (
      <div>
        {availableLocales.map(locale => (
          <span key={locale}>
          {isSelected(locale) ? (
            <span>{locale}</span>
          ) : (
            <a
              href={`?lang=${locale}`}
              onClick={(e) => {
                setLocale({locale});
                e.preventDefault();
              }}
            >{locale}</a>
          )}
            {' '}
          </span>
        ))}
      </div>
    );
  }
  return <div/>;
}

LanguageSwitcher.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  availableLocales: PropTypes.arrayOf(PropTypes.string).isRequired,
  setLocale: PropTypes.func.isRequired,
};

export default connect(state => ({
  availableLocales: state.runtime.availableLocales,
  currentLocale: state.intl.locale,
}), {
  setLocale,
})(LanguageSwitcher);
