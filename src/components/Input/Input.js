import styled from '@emotion/styled';

import { colors } from '../../styles';

export default styled.input`
  background: transparent;
  outline: 1px solid ${colors.darkgray};
  border: none;
  height: 61px;
  color: ${colors.darkgray};
  font-family: 'NB International Pro';
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 2px;
  line-height: 36px;
  text-transform: uppercase;
  padding: 20px;
  margin-bottom: 1rem;
  width: 100%;
  &::placeholder {
    font-family: 'NB International Pro';
    font-weight: 600;
    color: ${colors.darkgray};
    text-transform: uppercase;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    /* this hack allows the background color of autocomplete to stay transparent */
    transition: background-color 5000s ease-in-out 0s;
  }
`;
