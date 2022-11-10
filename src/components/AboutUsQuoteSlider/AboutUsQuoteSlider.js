/* eslint-disable prefer-template */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Slider from 'react-slick';

import { mediaQueries, fonts, weights, colors } from '../../styles';
import AboutUsQuotePreview from './AboutUsQuotePreview';
import FullWidthSection from '../FullWidthSection';

const AboutUsQuoteSlider = ({ minHeight, backgroundColor, data }) => {
  console.log(data.nodes.text);
  console.log(data.nodes.images);

  const mergeById = (a1, a2) =>
    a1.map(itm => ({
      ...a2.find(item => item.name === itm.imageName && item),
      ...itm,
    }));

  console.log(mergeById(data.nodes.text, data.nodes.images));

  const [count, setCount] = useState('01');

  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 7500,
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: currentSlide => {
      // currentSlide starts at 0. Add 1 for human-readable slide number.
      let current = currentSlide + 1;
      // Add a leading zero if it's single-digit.
      current = current < 10 ? '0' + current : current;
      setCount(current);
    },
  };

  let projects = [];
  projects = mergeById(data.nodes.text, data.nodes.images);

  const totalSlides =
    projects.length < 10 ? '0' + projects.length : projects.length;

  console.log(totalSlides);

  const countStyles = css`
    position: absolute;
    bottom: 45px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 96px;
    text-align: center;
    font-size: 12px;
    line-height: 3.33;
    font-family: ${fonts.sans};
    font-weight: ${weights.regular};
    letter-spacing: 1px;

    ${mediaQueries.phoneLarge} {
      bottom: 75px;
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
      <Slider
        {...settings}
        css={css`
          max-width: 100%;
          max-height: 100%;
          width: 100%;
          padding-bottom: 120px;

          ${mediaQueries.phoneLarge} {
            padding-bottom: 0;
          }

          .slick-arrow {
            top: auto;
            bottom: 50px;
            width: 20px;
            height: 16px;
            z-index: 999;
            opacity: 0.7;
            transition: 0.3s ease opacity;

            ${mediaQueries.phoneLarge} {
              bottom: 80px;
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
              left: 20px;
              right: auto;
            }

            ${mediaQueries.desktop} {
              left: 50%;
              margin-left: -590px;
            }
          }

          .slick-next {
            left: calc(50% + 65px);
            right: auto;
            background: url('/images/arrow-r.svg');

            ${mediaQueries.phoneLarge} {
              left: 50px;
            }

            ${mediaQueries.desktop} {
              left: 50%;
              margin-left: -555px;
            }
          }
        `}
      >
        {projects.map(node => {
          return (
            <AboutUsQuotePreview
              key={node.name}
              node={node}
              minHeight={minHeight}
            />
          );
        })}
      </Slider>
      <footer css={countStyles}>
        {totalSlides !== '01' ? `${count} - ${totalSlides}` : ''}
      </footer>
    </FullWidthSection>
  );
};

AboutUsQuoteSlider.propTypes = {
  backgroundColor: PropTypes.string,
  data: PropTypes.object.isRequired,
  tech: PropTypes.string,
  minHeight: PropTypes.string,
};

AboutUsQuoteSlider.defaultProps = {
  backgroundColor: colors.white,
  tech: '',
  minHeight: '750',
};

export default AboutUsQuoteSlider;
