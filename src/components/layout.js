import React from 'react';
import { Global } from '@emotion/react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

import { globalStyles } from '../styles';

import { headerPropTypes } from './Header/Header';

import '../styles/layout.css';

const Header = loadable(() => import('./Header'));
const Footer = loadable(() => import('./Footer'));

const Layout = ({ children, headerData }) => (
  <>
    <Global styles={globalStyles} />
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
