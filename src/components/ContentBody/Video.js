/* eslint-disable prefer-template */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import ReactPlayer from 'react-player';

import { container } from '../../styles';
import FullWidthSection from '../FullWidthSection';

const Video = ({ data }) => {
  const refVimeo = useRef();
  const {
    field_vimeo_video_link: videoLink,
    field_video_controls: showControls,
  } = data;

  const sectionStyles = css`
    ${container.min}
    margin: 0 auto 70px;
    padding: 0;
    position: relative;
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

  return (
    <FullWidthSection height='0' minHeight='0' css={sectionStyles}>
      <ReactPlayer
        css={playerStyles}
        url={videoLink.uri}
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
    </FullWidthSection>
  );
};

Video.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Video;
