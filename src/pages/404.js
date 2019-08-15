import React from 'react';
import { css } from '@emotion/core';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import Button from '../components/Button';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout
    headerData={{
      height: '85vh',
      mobileMinHeight: '85vh',
      children: (
        <span
          css={css`
            height: 60px;
            width: 260px;
            font-size: 16px;
            font-weight: 300;
            line-height: 27px;
            text-align: center;
            margin-top: -5rem;
          `}
        >
          <h1>Damn.</h1>
          <p>
            That page is not available. Head home and we&apos;ll get you sorted.
          </p>
          <br />
          <Button onClick={() => navigate('/')}>Go to home</Button>
        </span>
      ),
    }}
  >
    <SEO title='404: Not found' />
  </Layout>
);

export default NotFoundPage;
