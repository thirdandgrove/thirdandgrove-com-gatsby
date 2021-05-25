import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

import { globalStyles } from '../styles';

import { headerPropTypes } from './Header/Header';

import '../styles/layout.css';

const Header = loadable(() => import('./Header'));
const Footer = loadable(() => import('./Footer'));
const LoadableGlobal = loadable(async () => {
  const { Global } = await import('@emotion/react');
  return Global;
});

const Layout = ({ children, headerData }) => (
  <>
    <LoadableGlobal styles={globalStyles} />
    <Header {...headerData} />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerData: PropTypes.shape(headerPropTypes),
};

Layout.defaultProps = {
  headerData: {},
};

export default Layout;
