import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import parse, { domToReact } from 'html-react-parser';
import PostCode from './PostCode';

import FullWidthSection from '../FullWidthSection';
import {
  contentH2,
  contentHeadings,
  weights,
  container,
  mediaQueries,
  dropCap,
} from '../../styles';

const getLanguage = node => {
  if (node.children.length > 0 && node.children[0].name === 'code') {
    if (node.children[0].attribs.class != null) {
      return node.children[0].attribs.class
        .replace('language-', '')
        .replace('has-normal-font-size', '')
        .trim()
        .toString();
    }
  }
  return null;
};

const getCode = node => {
  if (node.children.length > 0 && node.children[0].name === 'code') {
    return node.children[0].children;
  }
  return node.children;
};

// eslint-disable-next-line consistent-return
const replaceCode = node => {
  if (node.name === 'pre') {
    return (
      node.children.length > 0 && (
        <PostCode language={getLanguage(node)}>
          {domToReact(getCode(node))}
        </PostCode>
      )
    );
  }

  // if (node.name === 'h1') {
  //   return (
  //     node.children.length > 0 && (
  //       <h2>
  //         {domToReact(node.children)}
  //       </h2>
  //     )
  //   );
  // }
  return null;
};

const Text = ({ data }) => {
  return (
    <FullWidthSection
      fontWeight={weights.thin}
      margin='200px auto'
      padding='0 20px'
      textAlign='left'
      align='start'
      justify='start'
      height='auto'
      css={css`
        :first-of-type {
          margin-top: 1.5em;
        }
        .stats-container,
        .stat-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .stats-container {
          flex-direction: column;
        }
        .stat-container {
          flex: auto;
          flex-direction: column;
          margin-bottom: 24px;
          :last-of-type {
            margin-bottom: 0;
          }
          h4 {
            font-size: 48px;
            font-weight: bold;
            letter-spacing: -0.2px;
            line-height: 54px;
            margin-bottom: 0;
          }
          p {
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 0.21px;
            line-height: 27px;
          }
        }
        ${container.min}

        ${mediaQueries.phoneLarge} {
          .stats-container {
            flex-direction: row;
          }
          .stat-container {
            margin-bottom: 0;
          }
          padding: 0;
        }
        ${data.field_capital_letter && dropCap}
        a {
          text-decoration: underline;
        }
        h2 {
          ${contentH2}
        }
        h3 {
          ${contentHeadings}
        }
        pre {
          overflow: auto;
          width: 100%;
        }
      `}
    >
      {parse(data.field_body.processed, {
        replace: replaceCode,
      })}
    </FullWidthSection>
  );
};

Text.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Text;
