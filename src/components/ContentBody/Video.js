/* eslint-disable prefer-template */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import ReactPlayer from 'react-player';

import {
  mediaQueries,
  jsBreakpoints,
  container,
  colors,
  fonts,
  weights,
} from '../../styles';
import useWindow from '../../hooks/useWindow';
import FullWidthSection from '../FullWidthSection';

const Video = ({ data }) => {
  const isBrowser = typeof window !== 'undefined' && window.document;
  const { width } = useWindow();
  const refVimeo = useRef();
  const isLgScreen = width >= jsBreakpoints.phoneLarge;
  const {
    field_vimeo_video_link: videoLink,
    field_video_controls: showControls,
  } = data;
  const [playing, setPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [buttonX, setButtonX] = useState('50%');
  const [buttonY, setButtonY] = useState('50%');
  const [buttonMoving, setButtonMoving] = useState(false);

  const sectionStyles = css`
    ${container.min}
    margin: 0 auto 70px;
    padding: 0;
    position: relative;

    ${!showControls &&
    `
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
    `}
  `;

  const playerStyles = css`
    position: relative;
    height: 0 !important;
    padding-top: 56.25%;
    overflow: hidden;

    > div {
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

    > div > div {
      padding-top: 56.25% !important;
    }

    iframe {
      width: 100% !important;
      left: 0 !important;
      margin: 0;
    }
  `;

  const btnStyles = css`
    display: ${buttonMoving || !playing || !isLgScreen ? 'block' : 'none'};
    position: ${buttonMoving ? 'fixed' : 'absolute'};
    top: ${buttonMoving ? `${buttonY}px` : '50%'};
    left: ${buttonMoving ? `${buttonX}px` : '50%'};
    width: 102px;
    height: 102px;
    text-align: center;
    font-size: 15px;
    line-height: 6.8;
    font-family: ${fonts.sans};
    font-weight: ${weights.bold};
    text-transform: uppercase;
    color: ${playing ? 'transparent' : colors.white};
    transform: translate(-50%, -50%);
    z-index: 3;
    transition: 0.2s ease-out all;
    border-radius: 50%;
    border: solid 2px;
    background: ${playing ? 'none' : 'rgba(180, 180, 180, 0.2)'};
    cursor: pointer;

    &:focus {
      outline: none;
    }

    ${mediaQueries.phoneLarge} {
      color: ${colors.white};
      background: rgba(180, 180, 180, 0.2);
    }
  `;

  return (
    <FullWidthSection
      height='0'
      minHeight='0'
      css={sectionStyles}
      onMouseEnter={() => isLgScreen && setButtonMoving(true)}
      onMouseLeave={() => isLgScreen && setButtonMoving(false)}
      onMouseMove={evt => {
        if (isLgScreen) {
          setButtonX(evt.clientX);
          setButtonY(evt.clientY);
        }
      }}
    >
      {!showControls && (
        <button
          type='button'
          css={btnStyles}
          onClick={() => {
            if (hasInteracted) {
              setPlaying(!playing);
            } else {
              setHasInteracted(true);
              setPlaying(true);
            }
          }}
        >
          {hasInteracted && playing ? 'Pause' : 'Play'}
        </button>
      )}
      {isBrowser && (
        <ReactPlayer
          css={playerStyles}
          url={videoLink.uri}
          playing={playing}
          ref={refVimeo}
          width='100%'
          config={{
            vimeo: {
              playerOptions: {
                controls: showControls,
                responsive: true,
                autoplay: false,
                loop: false,
              },
            },
          }}
        />
      )}
    </FullWidthSection>
  );
};

Video.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Video;
