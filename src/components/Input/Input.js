import styled from '@emotion/styled';

import { colors, fonts, weights } from '../../styles';

export default styled.input`
  background: transparent;
  outline: 1px solid ${colors.darkgray};
  border: none;
  height: 50px;
  color: ${colors.darkgray};
  font-family: ${fonts.sans};
  font-weight: ${weights.light};
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 1.3;
  padding: 0 20px;
  margin-bottom: 20px;
  width: 100%;

  &::placeholder {
    color: ${colors.darkgray};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    /* this hack allows the background color of autocomplete to stay transparent */
    transition: background-color 5000s ease-in-out 0s;
  }

  &:invalid {
    border: ${colors.red} 1px solid;
  }
`;
