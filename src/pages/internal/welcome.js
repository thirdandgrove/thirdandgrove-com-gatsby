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
  &::before {
    content: ' ';
    display: inline-block;
    margin-top: 8px;
    border-radius: 4px;
    height: ${props => (props.checked ? '18px' : '0px')};
    width: ${props => (props.checked ? '18px' : '0px')};
    background-color: ${colors.yellow};
    transition: width ease 0.8s;
  }
`;

const WelcomeList = styled.ul`
  list-style: none;
  width: 60vw;
`;

const ListItem = ({ number, title, subtitle, showSubtitle, checked }) => (
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
      <Checkbox checked={checked} />
    </div>
  </li>
);

const Welcome = () => {
  const [checked, setChecked] = useState(true);
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
          <ListItem
            title='Get your email'
            subtitle='test subtitle'
            showSubtitle
            number={1}
            checked={checked}
          />
        </WelcomeList>
      </FullWidthSection>
    </Layout>
  );
};

export default Welcome;
