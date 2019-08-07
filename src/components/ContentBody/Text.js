/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';
import {
  contentHeadings,
  weights,
  contValues,
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
        h2,
        h3 {
          ${contentHeadings}
        }

        ${mediaQueries.phoneLarge} {
          padding: 0;
          width: ${contValues.min};
        }

        ${renderDropCap && dropCap}
      `}
    />
  );
};

Text.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Text;
