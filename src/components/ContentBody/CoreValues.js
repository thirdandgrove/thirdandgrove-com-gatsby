import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import { fonts, mediaQueriesMax } from '../../styles/css-utils';
import AppleImage from '../../images/about/apple-animation.gif';
import useWindowSize from '../../hooks/useWindowSize';
import logoSets from '../LogoGrid/logosets';
import FullWidthSection from '../FullWidthSection/FullWidthSection';
import AboutSlider from '../AboutSlider/AboutSlider';

const aboutCoreValues = logoSets('corevalues', 'TRUE');

const CoreValues = ({ data }) => {
  const coreValues = css`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: flex-end;
    padding-top: 130px;

    ${mediaQueriesMax.xs} {
      display: block;
    }
  `;

  const styleImageMainSlider = css`
    max-width: 300px;
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${mediaQueriesMax.xs} {
      position: relative;
      display: block;
      margin: auto;
    }
  `;

  const coreValuesTitle = css`
    width: 800px;
    position: relative;
    right: 90px;
    top: 0;

    h3 {
      font-size: 8.5rem;
      font-family: ${fonts.serif};
      line-height: 90px;
      ${mediaQueriesMax.phoneLarge} {
        font-size: 6rem;
      }
      ${mediaQueriesMax.xs} {
        font-size: 6rem;
        font-weight: 500;
        line-height: 0.75;
      }
    }

    ${mediaQueriesMax.xs} {
      right: inherit;
      top: 30px;
      text-align: center;
      padding: auto;
      width: 100%;
    }

    h3:nth-of-type(1) {
      text-align: left;

      ${mediaQueriesMax.xs} {
        text-align: center;
      }
    }
    h3:nth-of-type(2) {
      text-align: right;

      ${mediaQueriesMax.xs} {
        text-align: center;
      }
    }
  `;

  const coreValueMobileContainer = css`
    padding: 40px 0 140px;
  `;

  const coreValuesStyle = css`
    position: relative;
    padding: 0;
    bottom: 170px;

    .gatsby-image-wrapper {
      width: 100%;
    }

    ${mediaQueriesMax.xs} {
      bottom: 130px;
    }
  `;

  const { width } = useWindowSize();

  return (
    <>
      <div css={coreValues}>
        <img src={AppleImage} alt='Core Values' css={styleImageMainSlider} />
        <div css={coreValuesTitle}>
          <h3>Core</h3>
          <h3>Values</h3>
        </div>
      </div>
      {width < 1100 ? (
        <div css={coreValueMobileContainer}>
          {aboutCoreValues.map((logo, i) => (
            // eslint-disable-next-line
            <div class='full list' key={i} css={coreValueLogoMobile}>
              {logo}
            </div>
          ))}
        </div>
      ) : (
        <FullWidthSection css={coreValuesStyle}>
          <AboutSlider />
        </FullWidthSection>
      )}
    </>
  );
};

CoreValues.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CoreValues;
