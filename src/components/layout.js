import React from 'react';
import { Global } from '@emotion/core';
import PropTypes from 'prop-types';

import { globalStyles } from '../styles';

import { headerPropTypes } from './Header/Header';
import Header from './Header';
import Footer from './Footer';

import '../styles/layout.css';

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
