import React from 'react';
import { css } from '@emotion/core';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import Button from '../components/Button';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout
    headerData={{
      title: `Damn.`,
      height: '85vh',
      mobileMinHeight: '100vh',
      children: (
        <span
          css={css`
            max-width: 250px;
            text-align: center;
          `}
        >
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
