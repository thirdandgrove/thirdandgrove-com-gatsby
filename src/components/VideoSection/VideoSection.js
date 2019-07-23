/* eslint-disable prefer-template */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import ReactPlayer from 'react-player';

import useWindow from '../../hooks/useWindow';
import {
  mediaQueries,
  jsBreakpoints,
  colors,
  fonts,
  weights,
} from '../../styles';
import FullWidthSection from '../FullWidthSection';

const VideoSection = ({ url }) => {
  const { width } = useWindow();
  const isSmScreen = width < jsBreakpoints.phoneLarge;
  const [playing, setPlaying] = useState(!isSmScreen);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [theUrl, setUrl] = useState(url);
  const [buttonX, setButtonX] = useState('50%');
  const [buttonY, setButtonY] = useState('50%');
  const [buttonVisible, setButtonVisible] = useState(false);

  const sectionStyles = css`
    position: relative;
    padding: 0;
    background: ${colors.darkgray};
  `;

  const playerStyles = css`
    position: relative;
    height: 0 !important;
    padding-top: 550px;
    overflow: hidden;
    opacity: ${hasInteracted && playing ? '1' : '0.65'};

    > div {
      // Don't get me started on this thing's markup
      position: absolute;
      top: 0;

      > div {
        padding-top: 550px !important;
      }
    }

    iframe {
      width: 165.4vh !important;
      left: 50% !important;
      margin: 0 0 0 -82.7vh;
    }

    ${mediaQueries.phoneLarge} {
      padding-top: 56.25%;

      > div > div {
        padding-top: 56.25% !important;
      }

      iframe {
        width: 100% !important;
        left: 0 !important;
        margin: 0;
      }
    }
  `;

  const btnStyles = css`
    display: block;
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: solid 2px ${colors.white};
    background: rgba(180, 180, 180, 0.2); // @todo update this
    font-size: 0;
    color: transparent;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      height: 0;
      width: 0;
      top: 30px;
      left: 32px;
      border: solid transparent 10px;
      border-right-width: 0;
      border-left: solid 16px ${colors.white};

      ${mediaQueries.phoneLarge} {
        display: none;
      }
    }

    ${mediaQueries.phoneLarge} {
      display: ${buttonVisible ? 'block' : 'none'};
      position: fixed;
      top: ${buttonY + 'px'};
      left: ${buttonX + 'px'};
      width: 102px;
      height: 102px;
      text-align: center;
      font-size: 15px;
      line-height: 6.8;
      font-family: ${fonts.sans};
      font-weight: ${weights.bold};
      text-transform: uppercase;
      color: ${colors.white};
      transform: translate(-50%, -50%);
      z-index: 3;
      transition: 0.2s ease-out all;
    }
  `;

  const h2Styles = css`
    display: ${hasInteracted && playing ? 'none' : 'block'};
    margin-left: 18px;
    margin-bottom: 0;
    font-size: 21px;
    line-height: 2.3;
    letter-spacing: -0.28px;
    color: ${colors.white};

    ${mediaQueries.phoneLarge} {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: 0;
      transform: translate(-50%, -50%);
      z-index: 2;
      font-size: 72px;
      line-height: 1.16;
      letter-spacing: -1px;
      text-align: center;
    }
  `;

  const detailWrapper = css`
    position: absolute;
    top: 50%;
    left: 20px;
    right: 20px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    ${mediaQueries.phoneLarge} {
      position: static;
      transform: none;
    }
  `;

  return (
    <FullWidthSection
      height='0'
      mobileHeight='0'
      css={sectionStyles}
      onMouseEnter={() => setButtonVisible(true)}
      onMouseLeave={() => setButtonVisible(false)}
      onMouseMove={evt => {
        setButtonX(evt.clientX);
        setButtonY(evt.clientY);
      }}
    >
      <div css={detailWrapper}>
        <button
          type='button'
          css={btnStyles}
          onClick={() => {
            if (!hasInteracted) {
              setHasInteracted(true);
              // Starting the video over from the beginning now that the user
              // has chosen to watch and it's unmuted. Adding the ? because if
              // I reset it to the exact same URL, Gatsby is smart/dumb enough to
              // realize it's the same and just continue on.
              setUrl(url + '?');
            } else {
              setPlaying(!playing);
            }
          }}
        >
          {hasInteracted && playing ? 'Pause' : 'Play'}
        </button>
        <h2 css={h2Styles}>Watch Our Reel</h2>
      </div>
      <ReactPlayer
        // see: https://www.npmjs.com/package/react-player for props
        width='100%'
        css={playerStyles}
        url={theUrl}
        playing={playing}
        volume={hasInteracted ? 1 : 0} // Mute on autoplay
        config={{
          vimeo: {
            // see: https://developer.vimeo.com/api/oembed/videos for options
            playerOptions: {
              controls: false,
              responsive: true,
              autoplay: !isSmScreen,
            },
          },
        }}
      />
    </FullWidthSection>
  );
};

VideoSection.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoSection;
