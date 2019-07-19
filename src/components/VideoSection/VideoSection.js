/* eslint-disable prefer-template */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import ReactPlayer from 'react-player';

import useWindow from '../../hooks/useWindow';
import { mediaQueries, jsBreakpoints } from '../../styles';
import FullWidthSection from '../FullWidthSection';

const VideoSection = ({ url }) => {
  const { width } = useWindow();
  const isSmScreen = width < jsBreakpoints.phoneLarge;
  const [playing, setPlaying] = useState(!isSmScreen);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [theUrl, setUrl] = useState(url);

  const sectionStyles = css`
    position: relative;
  `;

  const playerStyles = css`
    position: relative;
    height: 0 !important;
    padding-top: 93vh;
    overflow: hidden;

    > div {
      // Don't get me started on this thing's markup
      position: absolute;
      top: 0;

      > div {
        padding-top: 93vh !important;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  `;

  return (
    <FullWidthSection height='0' mobileHeight='0' css={sectionStyles}>
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
      <ReactPlayer
        // see: https://www.npmjs.com/package/react-player for props
        width={width}
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
