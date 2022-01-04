/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import { fonts, mediaQueries } from '../styles';
import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import { updateExternalLinks } from '../util';

const LegacyInsights = ({ pageContext }) => {
  const { body, title, created, author } = pageContext;

  const bodyWithImages = body.replace(
    /\/sites\/default\/files/gi,
    'https://cms.thirdandgrove.com/sites/default/files'
  );

  const SectionStyle = css`
    width: 100%;
    padding: 32px;

    ${mediaQueries.phoneLarge} {
      max-width: 848px;
      padding: 36px;
    }
  `;

  useEffect(
    () => updateExternalLinks(document.querySelectorAll('main > div a')),
    []
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
      <FullWidthSection css={SectionStyle} height='100%'>
        <div dangerouslySetInnerHTML={{ __html: bodyWithImages }} />
      </FullWidthSection>
    </Layout>
  );
};

LegacyInsights.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default LegacyInsights;
