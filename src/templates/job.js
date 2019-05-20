import React from 'react';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import Button from '../components/Button';

export default ({ pageContext }) => {
  const { job } = pageContext;
  return (
    <Layout headerData={{ title: job.title }}>
      <FullWidthSection height='100%' padding='5rem 11rem'>
        <div dangerouslySetInnerHTML={{ __html: job.description }} />
        <Button
          css={css`
            margin: 5rem;
          `}
          onClick={() =>
            window.open(
              `https://thirdandgrove.applytojob.com/apply/${job.board_code}`,
              '_blank'
            )
          }
        >
          Apply
        </Button>
      </FullWidthSection>
    </Layout>
  );
};
