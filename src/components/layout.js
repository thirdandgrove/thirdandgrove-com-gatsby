import React from 'react';
import { Global } from '@emotion/core';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import '../styles/layout.css';
import { globalStyles } from '../styles';

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
  headerData: PropTypes.object,
};

Layout.defaultProps = {
  headerData: {},
};

export default Layout;
