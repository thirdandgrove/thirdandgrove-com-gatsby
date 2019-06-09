import styled from '@emotion/styled';
import { fonts, weights } from '../../styles';

const TextWrapper = styled.span`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
  background-color: ${props => props.backgroundColor};
  h3 {
    font-family: ${fonts.serif};
    font-size: 72px;
    font-weight: ${weights.medium};
    letter-spacing: -1px;
    line-height: 84px;
  }
`;

export default TextWrapper;
