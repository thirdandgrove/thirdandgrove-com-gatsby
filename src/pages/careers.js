import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { colors } from '../styles';
import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';

export default () => {
  const Filter = styled.nav`
    width: 100%;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 50%;
      margin: 5rem auto;
      margin-top: 1rem;
    }
    li {
      text-decoration: none;
      font-variant: small-caps;
      list-style: none;
      font-family: NBInternationalPro-Bol;
      font-size: 15px;
      color: ${colors.mediumgray};
      letter-spacing: 2px;
      text-align: right;
      line-height: 36px;
      padding-right: 15px;
      cursor: pointer;
      &.active {
        color: ${colors.darkgray};
        text-decoration: underline;
      }
    }
  `;
  return (
    <Layout
      headerData={{
        title: 'Careers',
        height: '450px',
      }}
    >
      <Filter>
        <ul
          css={css`
            margin: 0 auto !important;
          `}
        >
          <li
            css={css`
              margin: 0 auto;
            `}
          >
            filter jobs
          </li>
        </ul>
        <ul>
          <li>creative</li>
          <li>delivery</li>
          <li>strategy</li>
          <li className='active'>engineering</li>
        </ul>
      </Filter>
      <FullWidthSection>
        <p>joblist</p>
      </FullWidthSection>
    </Layout>
  );
};

// TODO: fetch data from Jazz API
// TODO: Build out individual job page
// TODO: implement filtering
