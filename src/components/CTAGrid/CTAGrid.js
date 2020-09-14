import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import CTAGridItem from './CTAGridItem';

const CTAGrid = ({ items }) => {
  return (
    <div>
      {items.map(({ icon, text }) => (
        <CTAGridItem icon={icon} text={text} />
      ))}
    </div>
  );
};

CTAGrid.propTypes = {
  items: PropTypes.array,
};

CTAGrid.defaultProps = {
  items: [],
};

export default CTAGrid;
