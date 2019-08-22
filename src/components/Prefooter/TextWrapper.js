/* eslint-disable prefer-template, no-else-return */
import styled from '@emotion/styled';

import { weights, mediaQueries } from '../../styles';

const TextWrapper = styled.span`
  display: flex;
  min-height: 450px;
  margin: 0;
  padding: 40px 20px;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
  background-color: ${props => props.backgroundColor};
  background-image: ${props => {
    if (
      typeof props.backgroundImage === 'undefined' ||
      props.backgroundImage == null
    ) {
      return 'none';
    } else {
      return (
        'url(' + props.backgroundImage.localFile.childImageSharp.fluid.src + ')'
      );
    }
  }};

  background-size: cover;
  background-position: center;

  ${mediaQueries.phoneLarge} {
    min-height: 500px;
    padding: 100px 20px 100px;
    justify-content: center;
  }

  h3 {
    margin-bottom: 28px;
    font-size: 42px;
    font-weight: ${weights.medium};
    letter-spacing: -0.2px;
    line-height: 1.375;

    ${mediaQueries.phoneLarge} {
      font-size: 48px;
      margin-bottom: 0;
      font-weight: ${weights.bold};
    }
  }
`;

export default TextWrapper;
