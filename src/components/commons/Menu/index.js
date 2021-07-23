import PropTypes from 'prop-types';
import React from 'react';
import PublicMenu from './variants/PublicMenu';
import AppMenu from './variants/AppMenu';

export default function Menu({ variant, user }) {
  return (
    variant === 'app' ? <AppMenu user={user} /> : <PublicMenu />
  );
}

Menu.defaultProps = {
  user: '',
};
Menu.propTypes = {
  variant: PropTypes.string.isRequired,
  user: PropTypes.string,
};
