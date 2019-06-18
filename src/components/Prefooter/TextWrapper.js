import styled from '@emotion/styled';
import { fonts, weights, mediaQueries } from '../../styles';

const TextWrapper = styled.span`
  margin: 0;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
  background-color: ${props => props.backgroundColor};

  ${mediaQueries.phoneLarge} {
    min-height: 500px;
  }

  h3 {
    font-size: 42px;
    font-weight: ${weights.medium};
    letter-spacing: -1px;
    line-height: 1.9;

    ${mediaQueries.phoneLarge} {
      font-size: 72px;
      line-height: 1.17;
    }
  }
`;

export default TextWrapper;
