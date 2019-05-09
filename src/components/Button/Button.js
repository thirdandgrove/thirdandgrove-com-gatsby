import styled from '@emotion/styled';

import { colors } from '../../styles';

export default styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid ${colors.darkgray};
  width: 220px;
  height: 18px;
  color: ${colors.darkgray};
  font-family: 'NB International Pro';
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 2px;
  line-height: 36px;
  padding-bottom: 40px;
  text-transform: uppercase;
`;
