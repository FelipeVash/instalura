/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import WebsiteGlobalProvider from '../../components/wrappers/WebsitePage/provider';
import { WebsitePageContextProvider } from '../../components/wrappers/WebsitePage/context';

const AllTheProviders = ({ children, ...props }) => (
  <WebsiteGlobalProvider {...props}>
    <WebsitePageContextProvider>
      {children}
    </WebsitePageContextProvider>
  </WebsiteGlobalProvider>
);

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (ui, options = {}) => {
  const Provider = (props) => <AllTheProviders {...props} {...options.providerProps} />;
  return render(ui, { wrapper: Provider, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
