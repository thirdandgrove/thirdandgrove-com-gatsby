import React, { useState } from 'react';
import { css } from '@emotion/core';

import FullWidthSection from '../FullWidthSection';
import Button from '../Button';
import { mediaQueries, colors, fonts } from '../../styles';

import NewsletterForm from './NewsletterForm';

export default () => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive(!isActive);

  return (
    <FullWidthSection
      className={isActive ? 'active' : ''}
      padding='60px 20px'
      css={css`
        ${mediaQueries.phoneLarge} {
        }
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        /* this is what centers your element in the fixed wrapper*/
        display: flex;
        flex-flow: column nowrap;
        justify-content: center; /* aligns on vertical for column */
        align-items: center; /* aligns on horizontal for column */

        /* just for styling to see the limits */
        border: 2px dashed red;
        box-sizing: border-box;
        background-color: ${colors.darkgrayFaded};
        z-index: 9999;

        .active {
          display: flex;
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
          }
          background-image: url('/images/illuminating.png');
          background-position: 132px -66px;
          background-size: 440px;
          background-repeat: no-repeat;
          width: 300px;
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
            height: 70px;
            width: 70px;
            padding: 0;
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
              font-size: 35px;
              display: block;
              transition: none;
            `}
          >
            &#10006;
          </span>
        </button>
        <h1
          css={css`
            ${mediaQueries.phoneLarge} {
              width: 840px;
              color: ${colors.reallydarkgray};
              font-family: ${fonts.serif};
              font-size: 40px;
              font-weight: 700;
              letter-spacing: -0.83px;
            }
            width: 270px;
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
            max-with: '335px';
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
          <NewsletterForm />
        </div>
      </div>
    </FullWidthSection>
  );
};
