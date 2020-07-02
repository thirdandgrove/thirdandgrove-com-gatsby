/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';

import phoneSVG from './phone.png';

const PhoneVideo = ({ src }) => {
  return (
    <FullWidthSection
      margin='0 auto'
      padding='0 20px'
      textAlign='left'
      align='center'
      justify='center'
      height='auto'
    >
      <div
        className='video--outer-container'
        css={css`
          width: 400px;
          position: relative;
          :before {
            display: block;
            content: '';
            width: 100%;
            padding-top: calc((19 / 9) * 80%);
            border-radius: 10vw;
          }
        `}
      >
        <div
          className='video--inner-container'
          css={css`
            letter-spacing: 0;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            overflow: hidden;
            border-radius: 5vw;

            :after {
              content: '';
              width: 100%;
              height: 100%;
              border-radius: 5vw;
              position: absolute;
              left: 0;
              top: 0;
              background-image: url(${phoneSVG});
              background-repeat: no-repeat;
              background-size: contain;
            }
          `}
        >
          <div
            css={css`
              overflow: hidden;
              position: absolute;
              letter-spacing: 0;
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              overflow: hidden;
            `}
          >
            <video
              alt=''
              playsinline='true'
              muted='true'
              loop='true'
              preload='metadata'
              autoPlay
              css={css`
                letter-spacing: 0;
                position: absolute;
                top: 0;
                left: 0;
                overflow: hidden;
                width: 65%;
                position: absolute;
                left: 66px;
                top: 77px;
              `}
            >
              <source src={src} type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </FullWidthSection>
  );
};

PhoneVideo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default PhoneVideo;
