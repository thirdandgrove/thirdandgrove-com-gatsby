import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { mediaQueries } from '../../styles';

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};
  ${mediaQueries.phoneLarge} {
    display: flex;
    flex-direction: column;
  }
`;
const SplitSection = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);

SplitSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SplitSection;
