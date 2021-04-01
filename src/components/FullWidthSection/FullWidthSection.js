import styled from '@emotion/styled';

import { weights, mediaQueries } from '../../styles';

const FullWidthSection = props => {
  const sectionBackgroundCSS =
    props && props.backgroundImage
      ? styled.section`
          background-image: url(${props.backgroundImage});
        `
      : styled.section``;

  return styled.section`
    width: ${props.width || '100%'};
    min-height: ${props.minHeight || '300px'};
    display: flex;
    font-weight: ${props.fontWeight || weights.medium};
    flex-direction: ${props.flexDirection || 'column'};
    align-items: ${props.align || 'center'};
    justify-content: ${props.justify || 'center'};
    background-color: ${props.backgroundColor};
    background-size: cover;
    overflow: hidden;
    background-position: center;
    margin: ${props.margin || '0 auto'};
    padding: ${props.padding || '0 20px'};
    text-align: ${props.textAlign || 'left'};
    ${sectionBackgroundCSS}

    ${mediaQueries.phoneLarge} {
      min-height: ${props.height || '700px'};
    }
  `;
};

export default FullWidthSection;
