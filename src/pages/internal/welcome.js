import React from 'react';
import PropTypes from 'prop-types';
import { navigate, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Layout from '../../components/layout';
import FullWidthSection from '../../components/FullWidthSection';
import SplitSection from '../../components/SplitSection';
import { container, mediaQueries, colors } from '../../styles';
import Button from '../../components/Button';

const Checkbox = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  transition: all 150ms;
  border: black solid 1px;
  &::before {
    content: ' ';
    display: inline-block;
    margin-top: 6px;
    border-radius: 4px;
    height: 18px;
    width: 18px;
    background-color: ${props =>
      props.checked ? colors.yellow : colors.white};
  }
`;

const Welcome = () => {
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

          ${mediaQueries.phoneLarge} {
            padding-top: 150px;
            margin-bottom: 58px;
          }
        `}
      >
        <Checkbox />
      </FullWidthSection>
    </Layout>
  );
};

export default Welcome;
