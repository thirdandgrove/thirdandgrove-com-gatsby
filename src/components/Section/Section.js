import styled from '@emotion/styled';

const Section = styled.section`
  width: ${props => props.width || '1220'}px;
  max-width: 100%;
  margin: ${props => props.margin || '0 auto'};
  padding: ${props => props.padding || '0 20px'};
  font-weight: ${props => props.fontWeight || '100'};
`;

export default Section;
