/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable prefer-template */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
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

const VideoSection = ({ url, mp4, isFile = false, isContent = false }) => {
  const { width } = useWindow();
  const refMovie = useRef();
  const refVimeo = useRef();
  const isLgScreen = width >= jsBreakpoints.phoneLarge;
  const [playing, setPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [buttonX, setButtonX] = useState('50%');
  const [buttonY, setButtonY] = useState('50%');
  const [buttonVisible, setButtonVisible] = useState(false);

  const sectionStyles = css`
    display: none;
    position: relative;
    padding: 0;
    background: ${colors.darkgray};

    ${mediaQueries.phoneLarge} {
      display: block;
    }

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
  `;

  const playerStyles = css`
    position: relative;
    height: 0 !important;
    padding-top: 550px;
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

  const videoPlayer = css`
    width: 100% !important;
    height: auto !important;
    ${isContent
      ? `
    aspect-ratio: 16/9;
    object-fit: cover;
    max-height: 700px;
    `
      : ``}
    display: ${hasInteracted && playing ? 'none' : 'block'};
    opacity: ${hasInteracted && playing ? '1' : '0.65'};
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

  useEffect(() => {
    const mouseScroll = () => {
      const elementTarget = refMovie.current;
      if (elementTarget) {
        if (
          window.scrollY >
          elementTarget.offsetTop + elementTarget.offsetHeight
        ) {
          setButtonVisible(false);
        }
      }
    };

    window.addEventListener('scroll', mouseScroll);
    return () => window.removeEventListener('scroll', mouseScroll);
  }, []);

  return (
    <FullWidthSection
      height='0'
      minHeight='0'
      css={sectionStyles}
      onMouseEnter={() => setButtonVisible(true)}
      onMouseLeave={() => setButtonVisible(false)}
      onMouseMove={evt => {
        setButtonX(evt.clientX);
        setButtonY(evt.clientY);
      }}
    >
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

          if (isContent) {
            if (!playing) {
              refVimeo.current.play();
            } else {
              refVimeo.current.pause();
            }
          }
        }}
      >
        {hasInteracted && playing ? 'Pause' : 'Play'}
      </button>

      {isLgScreen && (
        <>
          {!isFile && (
            <ReactPlayer
              css={playerStyles}
              url={url}
              playing={playing}
              ref={refVimeo}
              volume={hasInteracted ? 1 : 0}
              width='100%'
              style={{
                display: `${hasInteracted && playing ? 'block' : 'none'}`,
                opacity: `${hasInteracted && playing ? '1' : '0.65'}`,
              }}
              config={{
                vimeo: {
                  playerOptions: {
                    controls: false,
                    responsive: true,
                    autoplay: false,
                    loop: isLgScreen,
                  },
                },
              }}
            />
          )}

          {isFile && (
            <video
              alt=''
              playsInline
              muted={!hasInteracted && !playing}
              loop={isLgScreen && playing}
              preload='metadata'
              autoPlay={isLgScreen && playing}
              ref={refVimeo}
              css={videoPlayer}
              style={{
                display: `${hasInteracted && playing ? 'block' : 'none'}`,
                opacity: `${hasInteracted && playing ? '1' : '0.65'}`,
              }}
            >
              <source src={url} type='video/mp4' />
            </video>
          )}

          <video
            alt=''
            playsInline
            muted
            loop={isLgScreen}
            preload='metadata'
            autoPlay={isLgScreen}
            ref={refMovie}
            css={videoPlayer}
          >
            <source src={mp4} type='video/mp4' />
          </video>
        </>
      )}
    </FullWidthSection>
  );
};

VideoSection.propTypes = {
  mp4: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isFile: PropTypes.bool.isRequired,
};

export default VideoSection;
