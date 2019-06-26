import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { mediaQueries } from '../../styles';

const SplitSection = ({ children, gridOverride, ...props }) => (
  <div
    {...props}
    css={css`
      ${mediaQueries.phoneLarge} {
        display: grid;
        grid-template-columns: ${gridOverride};
        justify-content: space-between;
      }
    `}
  >
    {children}
  </div>
);

SplitSection.propTypes = {
  gridOverride: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

SplitSection.defaultProps = {
  gridOverride: 'repeat(2, 1fr)',
};

export default SplitSection;
