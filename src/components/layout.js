import React from 'react';
import { Global } from '@emotion/react';
import PropTypes from 'prop-types';

import { globalStyles } from '../styles';

import { headerPropTypes } from './Header/Header';
import Header from './Header';
import SplitHeader from './SplitHeader';
import Footer from './Footer';

import '../styles/layout.css';

const Layout = ({ children, headerData, split, splitHeaderData }) => (
  <>
    <Global styles={globalStyles} />
    {split ? <SplitHeader {...splitHeaderData} /> : <Header {...headerData} />}
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerData: PropTypes.shape(headerPropTypes),
  split: PropTypes.bool,
  splitHeaderData: PropTypes.object,
};

Layout.defaultProps = {
  headerData: {},
  splitHeaderData: {},
  split: false,
};

export default Layout;
