import styled from '@emotion/styled';

export default styled.section`
  background-color: ${props => props.backgroundColor};
  margin: ${props => props.margin || '0'};
  text-align: ${props => props.textAlign || 'center'};
  width: ${props => props.width || '50%'};
`;
