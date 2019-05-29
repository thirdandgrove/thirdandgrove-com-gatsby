/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { css } from '@emotion/core';
import Slider from 'react-slick';

import FullWidthSection from '../FullWidthSection';
import { colors } from '../../styles';
import Button from '../Button';

export default ({ h3style, h4style, h1style }) => {
  const [selected, updateSelection] = useState('boston');
  const listCss = css`
    list-style: none;
    li {
      ${h1style}
      padding: 2rem 0;
    }
  `;
  return (
    <FullWidthSection height='100%'>
      <h3 css={h3style}>Where We Are</h3>
      <h1 css={h1style}>Offices if we need them.</h1>
      <section
        css={css`
          display: flex;
          article {
            padding: 3rem;
          }
        `}
      >
        <article
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <h1
            onClick={() => updateSelection('boston')}
            css={[
              h1style,
              css`
                text-align: left;
                color: ${selected === 'boston'
                  ? colors.yellow
                  : colors.darkgray};
                cursor: pointer;
                ::before {
                  content: '1';
                  font-size: 18px;
                  letter-spacing: 0;
                  line-height: 76px;
                  position: relative;
                  left: -5rem;
                }
              `,
            ]}
          >
            Boston
          </h1>
          <h1
            onClick={() => updateSelection('oakland')}
            css={[
              h1style,
              css`
                text-align: left;
                color: ${selected === 'oakland'
                  ? colors.yellow
                  : colors.darkgray};
                cursor: pointer;
                ::before {
                  content: '2';
                  font-family: Canela-Medium;
                  font-size: 18px;
                  letter-spacing: 0;
                  line-height: 76px;
                  position: relative;
                  left: -5rem;
                }
              `,
            ]}
          >
            Oakland
          </h1>
        </article>
        <article
          css={css`
            width: 50vw;
            h4 {
              ${h4style}
            }
          `}
        >
          {selected === 'boston' && (
            <h4>
              While we are fully remote, the rest of the workforce hasn’t caught
              up with us. To accomodate client needs and serve pockets of
              workers, we have West and East Coast offices. You don’t have to
              visit them, but feel free to stop by anytime.
            </h4>
          )}
          {selected === 'oakland' && <h4>...copy for oakland</h4>}
        </article>
      </section>
      <Slider>{/* image content pending */}</Slider>
      {selected === 'boston' && (
        <>
          <h3 css={h3style}>The good shit in Boston</h3>
          <ul css={listCss}>
            <li>Tanám</li>
            <li>Night Shift Brewing</li>
            <li>Alcove</li>
            <li>Kamakura</li>
            <li>Fox &amp; the knife</li>
            <li>Night Shift Brewing</li>
          </ul>
        </>
      )}
      {selected === 'oakland' && (
        <>
          <h3 css={h3style}>The good shit in Oakland</h3>
          <ul css={listCss}>
            <li>Other</li>
            <li>Places</li>
            <li>Oaktown</li>
            <li>IS Known For</li>
          </ul>
        </>
      )}
      <FullWidthSection
        height='550px'
        css={css`
          background-color: ${colors.lightblue};
          z-index: 1;
          height: 550px;
          &::after {
            content: '';
            background: url('images/menuBackdrop.webp');
            opacity: 0.15;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            position: absolute;
            z-index: -1;
          }
        `}
      >
        <h3 css={h3style}>Making Moves?</h3>
        <h1
          css={[
            h1style,
            css`
              padding: 2rem 0;
            `,
          ]}
        >
          Show us what you&apos;re made of.
        </h1>
        <Button onClick={() => navigate(`/careers`)}>
          view open positions
        </Button>
      </FullWidthSection>
    </FullWidthSection>
  );
};
