import styled from '@emotion/styled';
import React, { forwardRef } from 'react';
import { weights, mediaQueries } from '../../styles';

const FullWidthSection = forwardRef((props, ref) => {
  const {
    width,
    minHeight,
    fontWeight,
    flexDirection,
    align,
    justify,
    backgroundColor,
    backgroundImage,
    margin,
    padding,
    textAlign,
    height,
  } = props;
  // This outer container solves this https://github.com/philipwalton/flexbugs#flexbug-3
  // flexbox bug in ie11 when setting only min-height
  // We needed to make this a function component instead
  // of a pure styled component to add the outer wrapper.
  const OuterSection = styled.div`
    @media all and (-ms-high-contrast: none) {
      display: flex;
      flex-direction: column;
    }
  `;

  const InnerSection = styled.section`
    width: ${width || '100%'};
    min-height: ${minHeight || '300px'};
    display: flex;
    font-weight: ${fontWeight || weights.medium};
    flex-direction: ${flexDirection || 'column'};
    align-items: ${align || 'center'};
    justify-content: ${justify || 'center'};
    background-color: ${backgroundColor};
    background-image: url(${backgroundImage});
    background-size: cover;
    overflow: hidden;
    background-position: center;
    margin: ${margin || '0 auto'};
    padding: ${padding || '0 20px'};
    text-align: ${textAlign || 'left'};

    ${mediaQueries.phoneLarge} {
      min-height: ${height || '700px'};
    }
  `;

  return (
    <OuterSection>
      <InnerSection ref={ref} css={props.customStyles}>
        {props.children}
      </InnerSection>
    </OuterSection>
  );
});

export default FullWidthSection;
