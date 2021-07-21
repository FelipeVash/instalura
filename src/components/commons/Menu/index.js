import PropTypes from 'prop-types';
import React from 'react';
import PublicMenu from './variants/PublicMenu';
import AppMenu from './variants/AppMenu';

const menuVariants = {
  public: <PublicMenu />,
  app: <AppMenu />,
};

export default function Menu({ variant }) {
  return menuVariants[variant];
}

Menu.propTypes = {
  variant: PropTypes.string.isRequired,
};
