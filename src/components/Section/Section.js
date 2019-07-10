import styled from '@emotion/styled';

const Section = styled.section`
  width: ${props => props.width || '1220'}px;
  max-width: 100%;
  margin: 0 auto;
  padding: ${props => props.padding || '0 20px'};
`;

export default Section;
