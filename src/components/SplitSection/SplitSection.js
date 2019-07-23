import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { mediaQueries } from '../../styles';

const SplitSection = ({ children, gridTemplateColumns, ...props }) => (
  <div
    {...props}
    css={css`
      ${mediaQueries.phoneLarge} {
        display: grid;
        grid-template-columns: ${gridTemplateColumns};
        justify-content: space-between;
      }
    `}
  >
    {children}
  </div>
);

SplitSection.propTypes = {
  gridTemplateColumns: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

SplitSection.defaultProps = {
  gridTemplateColumns: 'repeat(2, 1fr)',
};

export default SplitSection;
