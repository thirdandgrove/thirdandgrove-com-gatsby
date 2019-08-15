import React from 'react';
import { css } from '@emotion/core';
import { navigate } from 'gatsby';

import { weights, h1L } from '../styles';
import Layout from '../components/layout';
import Button from '../components/Button';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout
    headerData={{
      height: 'calc(100vh - 200px)',
      mobileMinHeight: '93vh',
      children: (
        <div
          css={css`
            width: 260px;
            font-weight: ${weights.light};
            text-align: center;
          `}
        >
          <h1 css={h1L}>Damn.</h1>
          <p>
            That page is not available. Head home and we&apos;ll get you sorted.
          </p>
          <br />
          <Button onClick={() => navigate('/')}>Go to home</Button>
        </div>
      ),
    }}
  >
    <SEO title='404: Not found' />
  </Layout>
);

export default NotFoundPage;
