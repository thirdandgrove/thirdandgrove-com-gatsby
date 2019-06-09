import styled from '@emotion/styled';
import { fonts, weights } from '../../styles';

export default styled.section`
  width: 100%;
  height: ${props => props.height || '700px'};
  display: flex;
  font-family: ${fonts.serif};
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
`;
