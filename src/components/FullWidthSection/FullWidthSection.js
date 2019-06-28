import styled from '@emotion/styled';

import { weights, mediaQueries } from '../../styles';

export default styled.section`
  width: 100%;
  min-height: ${props => props.mobileHeight || '300px'};
  display: flex;
  font-weight: ${weights.medium};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  overflow: hidden;
  background-position: center;
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};

  ${mediaQueries.phoneLarge} {
    min-height: ${props => props.height || '700px'};
  }
`;
