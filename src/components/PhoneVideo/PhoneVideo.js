/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';

import phoneSVG from './phone.svg';

export default ({ src, title }) => {
  return (
    <>
      {title.indexOf(`CloudHealth`) !== -1 ? (
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
              width: 300px;
              position: relative;
              :before {
                display: block;
                content: '';
                width: 100%;
                padding-top: calc((19 / 9) * 95%);
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
                    width: 137%;
                    height: 120%;
                    position: absolute;
                    left: -55px;
                    top: -49px;
                  `}
                >
                  <source src={src} type='video/mp4' />
                </video>
              </div>
            </div>
          </div>
        </FullWidthSection>
      ) : (
        ''
      )}
    </>
  );
};
