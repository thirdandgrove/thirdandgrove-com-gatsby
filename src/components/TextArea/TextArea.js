import styled from '@emotion/styled';

import { colors, fonts, weights } from '../../styles';

export default styled.textarea`
  background: transparent;
  outline: 1px solid ${colors.darkgray};
  border: none;
  width: 100%;
  color: ${colors.darkgray};
  font-family: ${fonts.sans};
  font-weight: ${weights.bold};
  font-size: 15px;
  letter-spacing: 2px;
  line-height: 36px;
  text-transform: uppercase;
  padding: 20px;
  resize: none;
  &::placeholder {
    color: ${colors.darkgray};
  }
`;
