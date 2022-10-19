/* eslint-disable prefer-template */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { GatsbyImage } from 'gatsby-plugin-image';

import { mediaQueries, fonts, weights, colors } from '../../styles';
import FullWidthSection from '../FullWidthSection';
import Button from '../Button';
import { mediaQueriesMax } from '../../styles/css-utils';

const ImageGallery = ({ backgroundColor, minHeight, images, data }) => {
  const imageGalleryWrapper = css`
    max-width: 1200px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ${mediaQueries.phoneLarge} {
      padding-top: 150px;
      padding-bottom: 150px;
    }

    &.type-a {
      .image-1 {
        margin-left: 30px;
        padding-top: 140px;
        .gatsby-image-wrapper {
          max-width: 440px;
        }
        ${mediaQueriesMax.phoneLarge} {
          padding-top: 0;
        }
      }
      .image-2 {
        display: flex;
        flex-direction: column-reverse;
        margin-top: 30px;
        position: relative;
        max-width: 420px;
        .gatsby-image-wrapper {
          max-width: 420px;
        }
      }
      .image-3 {
        display: flex;
        flex-direction: column-reverse;
        position: relative;
        left: 35px;
        top: -130px;
        max-width: 400px;
        .gatsby-image-wrapper {
          max-width: 300px;
        }

        ${mediaQueriesMax.phoneLarge} {
          top: 0px;
        }
      }
    }
  `;

  const imageTitle = css`
    font-size: 48px;
    line-height: 55px;
    max-width: 500px;
    margin-top: 25px;
    font-weight: ${weights.bold};
    font-family: ${fonts.serif};
  `;

  const buttonStyle = css`
    position: absolute;
    right: 210px;
    bottom: 220px;

    ${mediaQueriesMax.phoneLarge} {
      display: none;
    }
  `;
  return (
    <FullWidthSection
      height={`${minHeight}px`}
      backgroundColor={backgroundColor}
      css={css`
        position: relative;
      `}
    >
      <div css={imageGalleryWrapper} className='type-a'>
        {data.map((dataItem, key) => {
          const imageToDisplay = images.find(
            image => image.name === dataItem.imageName
          );
          return (
            <div className={`image-${key}`}>
              <h3 css={imageTitle}>{dataItem.title}</h3>
              <GatsbyImage
                image={imageToDisplay.childImageSharp.gatsbyImageData}
                alt='Grandma standing with a plate'
              />
            </div>
          );
        })}
        <Button onClick='' css={buttonStyle}>
          Work for tag
        </Button>
      </div>
    </FullWidthSection>
  );
};

ImageGallery.propTypes = {
  backgroundColor: PropTypes.string,
  data: PropTypes.array,
  minHeight: PropTypes.string,
  images: PropTypes.array,
};

ImageGallery.defaultProps = {
  backgroundColor: colors.white,
  minHeight: '750',
  images: [],
  data: [],
};

export default ImageGallery;
