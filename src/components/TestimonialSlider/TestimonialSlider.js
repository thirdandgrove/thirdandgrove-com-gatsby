import React from 'react';
import { navigate } from 'gatsby';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import { colors, weights, mediaQueries, smSectionHead } from '../../styles';
import TestimonialPreviewSlide from '../TestimonialPreviewSlide';
import FullWidthSection from '../FullWidthSection';
import Button from '../Button';
import HeartIcon from '../../images/about/heart_icon.png';

const TestimonialSlider = ({
  showButton,
  showTitle,
  backgroundColor,
  title,
  data,
  arrows,
}) => {
  const settings = {
    arrows: arrows,
    autoplay: false,
    autoplaySpeed: 7500,
    cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)',
    centerPadding: 0,
    infinite: true,
    speed: 1000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          centerPadding: 10,
        },
      },
    ],
  };

  const headerStyling = css`
    font-size: 24px;
    font-weight: ${weights.thin};
    letter-spacing: 0.23px;
    line-height: 1.5;
    color: ${colors.reallydarkgray};
    width: 80%;
    margin: 2rem auto 0;
    padding-bottom: 2rem;
    text-align: center;

    ${mediaQueries.tablet} {
      margin-bottom: 30px;
      font-size: 36px;
      line-height: 1.5;
      letter-spacing: 0.4px;
      padding-left: 6rem;
      width: 600px;
      text-align: left;
      margin: 0;
    }
  `;

  const buttonStyling = css`
    display: inline-block;
    float: right;
    margin-right: 6rem;
  `;

  const buttonBottomStyling = css`
    margin: auto;
  `;

  const sliderHeader = css`
    width: 100%;
    margin-bottom: -25px;

    .header-left {
      float: left;
      width: 100%;

      ${mediaQueries.tablet} {
        float: left;
        width: 50%;
      }
    }

    .header-right {
      display: none;

      ${mediaQueries.tablet} {
        float: left;
        width: 50%;
      }
    }
  `;

  const heartIcon = css`
    margin-bottom: -100px;
    z-index: 1000;
    margin-left: 10%;

    img {
      width: 75%;
      height: 75%;
    }

    ${mediaQueries.tablet} {
      margin-left: 60%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    ${mediaQueries.phoneLarge} {
      margin-left: 30%;
    }
  `;

  return (
    <FullWidthSection
      height='0'
      css={css`
        padding-top: 25px;
        padding-bottom: 60px;
        padding-left: 0;
        padding-right: 0;
        background-color: ${backgroundColor};
        align-items: flex-start;

        ${mediaQueries.phoneLarge} {
          padding-bottom: 115px;
          padding-top: 90px;
        }
      `}
    >
      <div class='slider-header' css={sliderHeader}>
        <div class='header-left'>
          {showTitle && <h2 css={headerStyling}>{title}</h2>}
        </div>
        <div class='header-right'>
          {showButton && (
            <Button
              onClick={() => navigate(`https://thirdandgrove.breezy.hr/`)}
              css={buttonStyling}
            >
              Work at TAG
            </Button>
          )}
        </div>
      </div>

      <div class='heart-icon' css={heartIcon}>
        <img src={HeartIcon} alt='heart icon in a speech bubble' />
      </div>

      <Slider
        {...settings}
        css={css`
          max-width: 100%;
          max-height: 100%;
          margin-bottom: 30px;
          padding-bottom: 65px;

          .slick-list {
            ${mediaQueries.desktop} {
              padding: 0 90px;
            }
          }

          .slick-arrow {
            top: auto;
            bottom: 10px;
            width: 20px;
            height: 16px;
            z-index: 999;
            opacity: 0.7;
            transition: 0.3s ease opacity;

            ${mediaQueries.phoneLarge} {
              bottom: 10px;
            }

            &:hover,
            &:focus {
              opacity: 1;
            }

            &::before {
              display: none;
            }
          }

          .slick-prev {
            left: auto;
            right: calc(50% + 65px);
            background: url('/images/arrow-l.svg');

            ${mediaQueries.phoneLarge} {
              left: 60px;
              right: auto;
            }

            ${mediaQueries.desktop} {
              left: 0;
              margin-left: 6rem;
            }
          }

          .slick-next {
            left: calc(50% + 65px);
            right: auto;
            background: url('/images/arrow-r.svg');

            ${mediaQueries.phoneLarge} {
              left: 90px;
            }

            ${mediaQueries.desktop} {
              left: 0;
              margin-left: 9rem;
            }
          }
        `}
      >
        {data &&
          data.nodes.map(node => {
            return <TestimonialPreviewSlide key={node.title} article={node} />;
          })}
      </Slider>

      {showButton && (
        <Button
          onClick={() => navigate(`https://thirdandgrove.breezy.hr/`)}
          css={buttonBottomStyling}
        >
          Work at TAG
        </Button>
      )}
    </FullWidthSection>
  );
};

TestimonialSlider.propTypes = {
  showButton: PropTypes.bool,
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object.isRequired,
  showTitle: PropTypes.bool,
  arrows: PropTypes.bool,
};

TestimonialSlider.defaultProps = {
  showButton: true,
  showTitle: true,
  backgroundColor: colors.white,
  title: `Testimonials`,
  arrows: false,
};

export default TestimonialSlider;
