import styled from '@emotion/styled';

import { colors } from '../../styles';

export default styled.button`
  position: relative;
  min-width: 220px;
  padding: 11px 15px;
  border: none;
  outline: none;
  font-family: 'NB International Pro';
  font-weight: 600;
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: transparent;
  color: ${colors.darkgray};
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    transition: 0.3s ease height;
    background: ${colors.darkgray};
  }

  &:hover,
  &:focus {
    color: ${colors.white};

    &::before {
      height: 100%;
    }
  }
`;
