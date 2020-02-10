/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { navigate, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';
import SplitSection from '../../components/SplitSection';
import {
  container,
  mediaQueries,
  colors,
  h3L,
  contentH2,
  fonts,
} from '../../styles';
import Button from '../../components/Button';

const Checkbox = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  transition: all 150ms;
  border: ${colors.darkgrayFaded} solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: ' ';
    display: inline-block;
    border-radius: 4px;
    height: ${props => (props.checked ? '18px' : '0px')};
    width: ${props => (props.checked ? '18px' : '0px')};
    background-color: ${colors.yellow};
    transition: all linear 0.2s;
  }
`;

const WelcomeList = styled.ul`
  list-style: none;
  width: 60vw;
`;

const ListItem = ({
  number,
  title,
  subtitle,
  showSubtitle,
  checked,
  onClick,
}) => (
  <li
    css={css`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    `}
  >
    <small
      css={css`
        text-align: left;
        flex-grow: 0.3;
        font-family: ${fonts.serif};
      `}
    >
      {number}
    </small>
    <div
      onClick={onClick}
      css={css`
        text-align: left;
        flex-grow: 1;
      `}
    >
      <h3 css={h3L}>{title}</h3>
      <p>{showSubtitle ? subtitle : ''}</p>
    </div>
    <div
      css={css`
        flex-grow: 0.5;
      `}
    >
      <Checkbox onClick={onClick} checked={checked} />
    </div>
  </li>
);

const initialItems = [
  {
    title: 'Get your email',
    subtitle: (
      <>
        <a href='mail.google.com'>Click here</a> to get the link to set up your
        Third & Grove gmail account.
      </>
    ),
    number: 1,
  },
  {
    title: 'Set up calendar',
    subtitle: (
      <>
        <a href='mail.google.com'>Click here</a> to get the link to set up your
        Third & Grove gmail account.
      </>
    ),
    number: 2,
  },
];

const Welcome = () => {
  const [currentItem, updateCurrentItem] = useState(1);

  return (
    <Layout
      headerData={{
        title: `Let's get you all set up.`,
        subLabel: `Here's your checklist for getting started at TAG.`,
        mobileMinHeight: '93vh',
      }}
    >
      <FullWidthSection
        textAlign='center'
        height='100%'
        css={css`
          ${container.medium};
          padding-top: 20px;
          width: 60vw;
          ${mediaQueries.phoneLarge} {
            padding-top: 150px;
            margin-bottom: 58px;
          }
        `}
      >
        <WelcomeList>
          {initialItems.map(item => (
            <ListItem
              key={item.number}
              {...item}
              checked={currentItem > item.number}
              showSubtitle={currentItem === item.number}
              onClick={() => updateCurrentItem(currentItem + 1)}
            />
          ))}
        </WelcomeList>
      </FullWidthSection>
    </Layout>
  );
};

export default Welcome;
