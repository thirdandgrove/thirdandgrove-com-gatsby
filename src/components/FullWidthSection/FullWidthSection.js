import styled from '@emotion/styled';

import { weights, mediaQueries } from '../../styles';

export default styled.section`
  width: ${props => props.width || '100%'};
  min-height: ${props => props.minHeight || '300px'};
  display: flex;
  font-weight: ${props => props.fontWeight || weights.medium};
  flex-direction: ${props => props.flexDirection || 'column'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  background-color: ${props => props.backgroundColor};
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  overflow: hidden;
  background-position: center;
  margin: ${props => props.margin || '0 auto'};
  padding: ${props => props.padding || '0 20px'};
  text-align: ${props => props.textAlign || 'left'};

  ${mediaQueries.phoneLarge} {
    min-height: ${props => props.height || '700px'};
  }
`;
