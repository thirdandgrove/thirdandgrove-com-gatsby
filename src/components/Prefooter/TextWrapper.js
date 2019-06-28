/* eslint-disable prefer-template, no-else-return */
import styled from '@emotion/styled';

import { weights, mediaQueries } from '../../styles';

const TextWrapper = styled.span`
  display: flex;
  min-height: 300px;
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
    min-height: 610px;
    padding-top: 20px;
    padding-bottom: 70px;
    justify-content: space-evenly;
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
