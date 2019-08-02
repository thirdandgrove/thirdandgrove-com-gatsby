import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { mediaQueries } from '../../styles';

const SplitSection = ({
  children,
  gridTemplateColumns,
  gridColumnGap,
  ...props
}) => (
  <div
    {...props}
    css={css`
      ${mediaQueries.phoneLarge} {
        display: grid;
        grid-template-columns: ${gridTemplateColumns};
        grid-column-gap: ${gridColumnGap};
        justify-content: space-between;
      }
    `}
  >
    {children}
  </div>
);

SplitSection.propTypes = {
  gridTemplateColumns: PropTypes.string,
  gridColumnGap: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

SplitSection.defaultProps = {
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridColumnGap: 'inherit',
};

export default SplitSection;
