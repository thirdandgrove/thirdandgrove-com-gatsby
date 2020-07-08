/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';
import {
  contentH2,
  contentHeadings,
  weights,
  container,
  mediaQueries,
  dropCap,
} from '../../styles';

const Text = ({ data }) => {
  const renderDropCap = data.type === 'insight' && data.isFirstText;
  return (
    <FullWidthSection
      fontWeight={weights.thin}
      margin='0 auto'
      padding='0 20px'
      textAlign='left'
      align='start'
      justify='start'
      height='auto'
      dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
      css={css`
        .stats-container,
        .stat-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .stats-container {
          flex-direction: column;
        }

        .stat-container {
          flex: auto;
          flex-direction: column;
          margin-bottom: 24px;

          :last-of-type {
            margin-bottom: 0;
          }

          h4 {
            font-size: 48px;
            font-weight: bold;
            letter-spacing: -0.2px;
            line-height: 54px;
            margin-bottom: 0;
          }

          p {
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 0.21px;
            line-height: 27px;
          }
        }

        ${container.min} ${mediaQueries.phoneLarge} {
          .stats-container {
            flex-direction: row;
          }
          .stat-container {
            margin-bottom: 0;
          }
          padding: 0;
        }

        ${renderDropCap && dropCap}

        a {
          text-decoration: underline;
        }

        h2 {
          ${contentH2}
        }

        h3 {
          ${contentHeadings}
        }
      `}
    />
  );
};

Text.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Text;
