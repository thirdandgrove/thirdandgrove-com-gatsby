import React from 'react';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';
import '../styles/layout.css';
import { globalStyles } from '../styles';

const Layout = ({ children, headerData }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <Global styles={globalStyles} />
        <Header {...headerData} />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerData: PropTypes.object,
};

Layout.defaultProps = {
  headerData: {},
};

export default Layout;
