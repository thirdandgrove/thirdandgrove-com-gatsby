import React, { useState } from 'react';
import { Global, css } from '@emotion/core';

import useScrollPosition from '../../hooks/useScrollPosition';
import FullWidthSection from '../FullWidthSection';
import { mediaQueries, colors, fonts } from '../../styles';

import NewsletterForm from './NewsletterForm';

export default () => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive(!isActive);
  let openedOnce = false;

  useScrollPosition(
    ({ currPos }) => {
      const isShow = currPos.y * -1 > document.body.scrollHeight / 2;
      if (isShow && !openedOnce) {
        openedOnce = true;
        setIsActive(!isActive);
      }
    },
    [setIsActive],
    null,
    false
  );

  return (
    <>
      <Global
        styles={css`
          .active {
            display: flex !important;
          }
        `}
      />
      <FullWidthSection
        className={isActive ? 'active' : ''}
        padding='60px 20px'
        css={css`
          ${mediaQueries.phoneLarge} {
          }
          position: fixed;
          padding: 0;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          display: none;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          background-color: ${colors.darkgrayFaded};
          z-index: 9999;
          }
        `}
      >
        <div
          css={css`
            ${mediaQueries.phoneLarge} {
              background-position: 345px -140px;
              background-size: 1100px;
              background-repeat: no-repeat;
              width: 700px;
              padding: 115px 24px 24px 24px;
            }
            background-image: url('/images/illuminating.png');
            background-position: 72px -114px;
            background-size: 600px;
            background-repeat: no-repeat;
            width: 335px;
            background-color: ${colors.white};
            padding: 200px 24px 24px 24px;
            position: relative;
          `}
        >
          <button
            type='button'
            onClick={toggle}
            css={css`
              ${mediaQueries.phoneLarge} {
                top: -33px;
                right: -33px;
              }
              position: absolute;
              top: 12px;
              right: 12px;
              border: none;
              display: flex;
              justify-content: center;
              align-items: center;
              touch-action: manipulation;
              cursor: pointer;
              user-select: none;
              background-color: ${colors.black};
              padding: 20px;
              transition: none;
              border-radius: 5px;
            `}
          >
            <span
              role='img'
              aria-label='close'
              css={css`
                ${mediaQueries.phoneLarge} {
                }
                color: ${colors.white};
                background-color: ${colors.black};
                height: 30px;
                width: 30px;
                &:before {
                  content: ' before ';
                  transform: rotate(45deg);
                  position: absolute;
                  content: ' ';
                  height: 30px;
                  width: 4px;
                  background-color: ${colors.white};
                }
                &:after {
                  content: ' after ';
                  transform: rotate(-45deg);
                  position: absolute;
                  content: ' ';
                  height: 30px;
                  width: 4px;
                  background-color: ${colors.white};
                }
              `}
            />
          </button>
          <h1
            css={css`
              ${mediaQueries.phoneLarge} {
                color: ${colors.reallydarkgray};
                font-family: ${fonts.serif};
                font-size: 40px;
                font-weight: 700;
                line-height: 45px;
                letter-spacing: -0.83px;
              }
              width: 100%;
              color: ${colors.reallydarkgray};
              font-family: ${fonts.serif};
              font-size: 30px;
              font-weight: 700;
              letter-spacing: -0.45px;
              line-height: 36px;
              margin-bottom: 0;
            `}
          >
            Illuminating
            <br />
            Stuff, right?
          </h1>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: center;
            `}
          >
            <p
              css={css`
                ${mediaQueries.phoneLarge} {
                  width: 335px;
                  color: ${colors.reallydarkgray};
                  font-family: ${fonts.sans};
                  font-size: 16px;
                  font-weight: 300;
                  letter-spacing: 0.2px;
                  line-height: 27px;
                }
                width: 275px;
                color: ${colors.reallydarkgray};
                font-family: ${fonts.sans};
                font-size: 16px;
                font-weight: 300;
                letter-spacing: 0.2px;
                line-height: 27px;
              `}
            >
              Join our mailing list and you can stay this informed all the time.
            </p>
            <NewsletterForm
              css={css`
                max-with: 335px;
                display: flex;
                flex-direction: column;
                justify-content: center;
              `}
            />
          </div>
        </div>
      </FullWidthSection>
    </>
  );
};
