/* eslint-disable */
import React, { useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';
import { container, mediaQueries, colors, h3L, fonts } from '../../styles';

/**
 * The content for this component lives in an array at the bottom of this file
 * for reasons.
 */

const Checkbox = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  transition: all 150ms;
  border: ${colors.darkgrayFaded} solid 1px;
  display: flex;
  align-items: center;
  cursor: pointer;
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

const ListItem = ({ number, title, subtitle, active, checked, onClick }) => (
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
        ${active
          ? `color: ${colors.black};
                margin: 0;`
          : `color: ${colors.darkgrayFaded};`}
      `}
    >
      {number}
    </small>
    <div
      onClick={onClick}
      css={css`
        text-align: left;
        flex-grow: 1;
        width: 38vw;
        cursor: pointer;
      `}
    >
      <h3
        css={[
          h3L,
          active
            ? css`
                color: ${colors.black};
                margin: 0;
              `
            : css`
                color: ${colors.darkgrayFaded};
              `,
        ]}
      >
        {title}
      </h3>
      <p
        css={css`
          color: ${colors.darkgrayFaded};
          width: 350px;
          font-size: 1.1em;
          height: ${active ? '80px' : '0px'};
          overflow: hidden;
          transition: all linear 0.2s;
          a {
            color: ${colors.black};
            text-decoration: underline;
          }
        `}
      >
        {subtitle}
      </p>
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

const Welcome = () => {
  const [currentItem, updateCurrentItem] = useState(1);

  return (
    <Layout
      headerData={{
        title: `Let's get you all set up.`,
        subLabel: `Here's your checklist for getting started at TAG.`,
        mobileMinHeight: '93vh',
        doNotIndex: true,
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
          {checklistItems
            .map((item, i) => ({ ...item, number: i + 1 }))
            .map(item => (
              <ListItem
                key={item.number}
                {...item}
                checked={currentItem > item.number}
                active={currentItem === item.number}
                onClick={() =>
                  updateCurrentItem(
                    // allow forward and back behavior based on item clicked
                    item.number >= currentItem
                      ? currentItem + 1
                      : currentItem - 1
                  )
                }
              />
            ))}
        </WelcomeList>
      </FullWidthSection>
    </Layout>
  );
};

export default Welcome;

const checklistItems = [
  {
    title: 'Get your email',
    subtitle: (
      <>
        <a target='_blank' href='#'>
          Click here
        </a>{' '}
        to get the link to set up your Third & Grove gmail account.
      </>
    ),
    number: 1,
  },
  {
    title: 'Set up calendar',
    subtitle: (
      <>
        Confirm you can see the{' '}
        <a target='_blank' href='#'>
          Calendar
        </a>{' '}
        associated with you TAG email.
      </>
    ),
  },
  {
    title: 'Read the handbook',
    subtitle: (
      <>
        Disconver our company policies and the standards we hold ourselves to{' '}
        <a target='_blank' href='#'>
          here
        </a>
      </>
    ),
  },
  {
    title: 'Sign some stuff',
    subtitle: (
      <>
        Taxes, deposit forms, and all the other fun stuff. We need your{' '}
        <a target='_blank' href='#'>
          autograph.
        </a>
      </>
    ),
  },
  {
    title: 'Get a laptop',
    subtitle: (
      <>
        Once you get your laptop, there&apos;s a few things we need you to{' '}
        <a target='_blank' href='#'>
          set up.
        </a>
      </>
    ),
  },
  {
    title: 'Set up Slack',
    subtitle: `It's the main way we communicate. Check your email for the setup link.`,
  },
  {
    title: 'Track your time',
    subtitle: (
      <>
        Harvest is a huge part of our day to day. Take a few minutes to{' '}
        <a target='_blank' href='#'>
          check it out.
        </a>
      </>
    ),
  },
  {
    title: 'Predict your time',
    subtitle: (
      <>
        Not actually, but we need you to set up{' '}
        <a target='_blank' href='#'>
          forcast.
        </a>{' '}
        It&apos;s how we manage projects.
      </>
    ),
  },

  {
    title: 'Log into Jira',
    subtitle: `Please confirm you received the set up email and have an account with TAG`,
  },
  {
    title: 'The wiki',
    subtitle: (
      <>
        Read through it and make sure to sign our{' '}
        <a target='_blank' href='#'>
          Security Policy.
        </a>
      </>
    ),
  },
  {
    title: 'Inventory form',
    subtitle: (
      <>
        Read it,{' '}
        <a target='_blank' href='#'>
          sign it.
        </a>
      </>
    ),
  },
  {
    title: 'Work from home policy',
    subtitle: (
      <>
        It&apos;s like work, only better. Need your John Hancock on{' '}
        <a target='_blank' href='#'>
          this form.
        </a>
      </>
    ),
  },
  {
    title: 'Join JustWorks',
    subtitle: (
      <>
        All of our employment paperwork and records, all in one place.{' '}
        <a target='_blank' href='#'>
          Check it.
        </a>
      </>
    ),
  },
  {
    title: 'Know Your Team',
    subtitle: `Company wide questions and discussion. Big online water cooler.`,
  },
  {
    title: 'Zoom',
    subtitle: (
      <>
        Sign up{' '}
        <a target='_blank' href='#'>
          here
        </a>{' '}
        with your TAG email.
      </>
    ),
  },
  {
    title: 'Schedule your review',
    subtitle: `Connect with your manager, make sure this is set up in your calendar.`,
  },
  {
    title: 'Trello there',
    subtitle: `We use this as a kick starter to help you stay organized as you get started.`,
  },
];
