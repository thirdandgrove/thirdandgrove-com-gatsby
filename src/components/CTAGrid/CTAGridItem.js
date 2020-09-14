import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const CTAGridItem = ({ icon, text }) => {
  return <div />;
};

CTAGridItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};

CTAGridItem.defaultProps = {
  icon: '',
  text: '',
};

export default CTAGridItem;
