import React from 'react';
import { Global } from '@emotion/react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

import { globalStyles } from '../styles';

import { headerPropTypes } from './Header/Header';

import '../styles/layout.css';

const Header = loadable(() => import('./Header'));
const Footer = loadable(() => import('./Footer'));
const SplitHeader = loadable(() => import('./SplitHeader'));

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
