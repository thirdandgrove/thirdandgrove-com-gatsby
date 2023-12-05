import React from 'react';
import { css } from '@emotion/react';
import { smSectionHead, container, mediaQueries, weights } from '../../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const slideTitleWrapper = css`
  display: flex;
  width: 100%;
  min-height: 120px;
  margin-bottom: 10px;
  align-items: center;
  word-wrap: initial;
  padding-left: 0;
  padding-right: 0;
  ${mediaQueries.phoneLarge} {
    max-width: 550px;
    min-height: 194px;
    margin-bottom: 40px;
  }
`;

const h1Styles = css`
  width: 100%;
  margin-bottom: 0;
  font-size: 48px;
  line-height: 1.27;
  font-weight: ${weights.black};
  letter-spacing: 0.8px;
  opacity: 0;
  transition: 0.6s ease all;

  .slick-active & {
    opacity: 1;
  }

  ${mediaQueries.phoneLarge} {
    margin-bottom: 0;
    font-size: 90px;
    line-height: 0.94;
    letter-spacing: 1.4px;
    transform: translateX(200px);
    opacity: 0;

    .slick-active & {
      transform: translateX(0);
    }
  }
`;

const h3Styles = css`
  margin: 40px 0 20px;
  line-height: 1;

  ${mediaQueries.phoneLarge} {
    margin-top: 0;
  }
`;

const AboutUsQuotePreview = ({ node, minHeight }) => {
  const slideStyles = css`
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    ${mediaQueries.phoneLarge} {
      position: relative;
      min-height: ${minHeight}px;
      padding-bottom: 20px;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  `;
  const imageStyles = css`
    aspect-ratio: 1;

    .gatsby-image-wrapper {
      aspect-ratio: 1;
    }
  `;

  return (
    <div key={node.title} css={[container.max, slideStyles]}>
      <h3 css={[smSectionHead, h3Styles]}>Our Work</h3>
      <div css={slideTitleWrapper}>
        <h4 css={h1Styles}>{node.title}</h4>
      </div>
      <div css={imageStyles}>
        <GatsbyImage
          image={getImage(node.childImageSharp)}
          aspectRatio={1}
          style={{ aspectRatio: 1 }}
        />
      </div>
    </div>
  );
};

AboutUsQuotePreview.propTypes = {};

export default AboutUsQuotePreview;
