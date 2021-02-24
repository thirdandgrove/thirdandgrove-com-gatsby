import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

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
      @media all and (-ms-high-contrast: none) {
        display: flex;
        flex-flow: column nowrap;
      }

      ${mediaQueries.phoneLarge} {
        display: grid;
        grid-template-columns: ${gridTemplateColumns};
        grid-column-gap: ${gridColumnGap};
        justify-content: space-between;

        @media all and (-ms-high-contrast: none) {
          display: flex;
          flex-flow: row nowrap;
        }
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
