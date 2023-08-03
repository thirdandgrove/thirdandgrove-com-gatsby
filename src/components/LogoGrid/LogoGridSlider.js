import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Slider from 'react-slick';

import FullWidthSection from '../FullWidthSection';
import useWindow from '../../hooks/useWindow';
import {
  colors,
  mediaQueries,
  jsBreakpoints,
  smSectionHead,
  container,
} from '../../styles';

import logoSets from './logosets';

const LogoGridSlider = ({
  title,
  subtitle,
  logoset,
  backgroundColor,
  minHeight,
  styles,
  defaultItemWidth,
  sliderSettings,
  images,
  isScrollingLogos,
}) => {
  const { width } = useWindow();
  const isSmScreen = width < jsBreakpoints.phoneLarge;

  let logoCount = 0;
  let renderSet = null;

  renderSet = logoSets(logoset, isSmScreen, images, isScrollingLogos);
  logoCount = renderSet.length;

  const Logos = styled.div`
    display: flex;
    flex-wrap: nowrap;
    text-align: center;
    justify-content: center;
    margin-bottom: -60px;
    margin-left: 50px;
    margin-right: 50px;

    .slick-list {
      max-width: 1280px;
    }
    .slick-track {
      display: flex;
      align-items: center;
    }
  `;

  const logoItem = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 50%;
    margin-bottom: 70px;

    ${mediaQueries.phoneLarge} {
      flex: 0 0 ${defaultItemWidth};
      margin-bottom: 70px;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  `;

  const titleStyles = css`
    text-align: center;
    margin-bottom: 60px;

    ${mediaQueries.phoneLarge} {
      margin-bottom: 70px;
    }
  `;

  const multiLineStyles = css`
    text-align: center;
    margin-bottom: 20px;
    line-height: 1;

    ${mediaQueries.phoneLarge} {
      margin-bottom: 0;
    }
  `;

  const subTitleStyles = css`
    text-align: center;
    margin-bottom: 36px;
    line-height: 1;
    font-size: 24px;
    font-weight: 700;

    ${mediaQueries.phoneLarge} {
      font-size: 44px;
      font-weight: 700;
    }
  `;

  const containerStyles = css`
    padding-top: 0 !important;
    padding-bottom: 50px;

    ${mediaQueries.phoneLarge} {
      min-height: 0;
      padding-top: 85px;
      padding-bottom: 85px;
    }
  `;

  return (
    <FullWidthSection
      backgroundColor={backgroundColor}
      minHeight={minHeight}
      height='0'
      css={styles}
    >
      <div css={[container.max, containerStyles]}>
        <h2 css={[smSectionHead, subtitle ? multiLineStyles : titleStyles]}>
          {title}
        </h2>
        {subtitle && <h3 css={[smSectionHead, subTitleStyles]}>{subtitle}</h3>}
        <Logos>
          <Slider {...sliderSettings}>
            {renderSet.map((logo, i) => (
              // eslint-disable-next-line
              <div key={i} css={logoItem}>
                {logo}
              </div>
            ))}
          </Slider>
        </Logos>
      </div>
    </FullWidthSection>
  );
};

LogoGridSlider.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  logoset: PropTypes.string,
  backgroundColor: PropTypes.string,
  minHeight: PropTypes.string,
  styles: PropTypes.object,
  defaultItemWidth: PropTypes.string,
  sliderSettings: PropTypes.object,
  isScrollingLogos: PropTypes.bool,
};

LogoGridSlider.defaultProps = {
  logoset: 'default',
  backgroundColor: colors.lightgray,
  minHeight: '100vh',
  subtitle: '',
  styles: {},
  defaultItemWidth: '25%',
  sliderSettings: {},
  isScrollingLogos: false,
};

export default LogoGridSlider;
