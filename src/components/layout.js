import React from 'react';
import { Global } from '@emotion/react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { colors, globalStyles } from '../styles';

import { headerPropTypes } from './Header/Header';
import Header from './Header';
import SplitHeader from './SplitHeader';
import Footer from './Footer';

import '../styles/layout.css';

const Layout = ({ children, headerData, split, splitHeaderData, color }) => (
  <>
    <Helmet>
      <meta name='theme-color' content={color} data-react-helmet='true' />
    </Helmet>
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
  color: PropTypes.string,
};

Layout.defaultProps = {
  headerData: {},
  splitHeaderData: {},
  split: false,
  color: colors.yellow,
};

export default Layout;
