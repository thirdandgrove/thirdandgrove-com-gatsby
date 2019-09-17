/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { fonts, mediaQueries } from '../styles';
import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';

const LegacyInsights = ({ pageContext }) => {
  const { body, title, created, author } = pageContext;

  const bodyWithImages = body.replace(
    /\/sites\/default\/files/gi,
    'https://cms.thirdandgrove.com/sites/default/files'
  );

  return (
    <Layout
      headerData={{
        metaTitle: title,
        children: (
          <>
            <span
              css={css`
                font-family: ${fonts.sans};
                font-size: 15px;
                padding: 32px;

                ${mediaQueries.xs} {
                  padding: 36px;
                }
              `}
            >
              {`${created} - ${author}`}
            </span>
            <h3
              css={css`
                font-size: 72px;
                width: 70%;
                text-align: center;
              `}
            >
              {title}
            </h3>
          </>
        ),
      }}
    >
      <FullWidthSection height='100%' padding='84px'>
        <div dangerouslySetInnerHTML={{ __html: bodyWithImages }} />
      </FullWidthSection>
    </Layout>
  );
};

LegacyInsights.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default LegacyInsights;
