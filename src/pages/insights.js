import React from 'react';
import PropTypes from 'prop-types';
import { graphql, navigate } from 'gatsby';
import { css } from '@emotion/core';

import {
  fonts,
  h1L,
  mediaQueries,
  container,
  colors,
  weights,
} from '../styles';
import ArticlePreview from '../components/ArticlePreview';
import Button from '../components/Button';
import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import { ensureTrailingSlash } from '../util';

const Insights = ({ data }) => {
  const articles = data.allInsight.nodes;
  // newest article is in the header
  const headerArticle = articles[0];

  const headerStyles = css`
    @keyframes headerSlide {
      0% {
        transform: translateY(50%);
      }
      100% {
        transform: translateY(0);
      }
    }

    @keyframes afterReveal {
      0% {
        height: 100%;
      }
      100% {
        height: 0;
      }
    }

    padding: 0 20px;
    margin: 30px 0 60px;
    text-align: center;
    transform: translateY(50%);
    animation-name: headerSlide;
    animation-duration: 0.7s;
    animation-timing-function: ease-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: ${colors.yellow};
      animation-name: afterReveal;
      animation-duration: inherit;
      animation-timing-function: inherit;
      animation-iteration-count: inherit;
      animation-fill-mode: inherit;
    }

    ${mediaQueries.phoneLarge} {
      width: 70%;
      margin: 40px auto 50px;
    }
  `;

  return (
    <Layout
      headerData={{
        metaTitle: `Latest Insights on All Things Digital`,
        children: (
          <>
            <div
              css={css`
                margin-top: 20px;
                font-family: ${fonts.sans};
                font-weight: ${weights.light};
                font-size: 15px;
                letter-spacing: 0.2px;
                line-height: 2.4;
              `}
            >
              {`${headerArticle.created} - ${
                headerArticle.relationships.uid.name
              }`}
            </div>
            <h1 data-cy='insightTitle' css={[h1L, headerStyles]}>
              {headerArticle.title}
            </h1>

            <Button
              onClick={() =>
                navigate(ensureTrailingSlash(headerArticle.path.alias))
              }
            >
              Read More
            </Button>
          </>
        ),
      }}
    >
      <FullWidthSection padding='0'>
        <div
          css={[
            container.max,
            css`
              padding-top: 20px;
              margin-bottom: 30px;

              ${mediaQueries.phoneLarge} {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: 10%;
                place-items: center top;
                padding-top: 143px;
                margin-bottom: 0;
              }
            `,
          ]}
        >
          {articles.slice(1).map(article => (
            <ArticlePreview key={article.title} article={article} />
          ))}
        </div>
      </FullWidthSection>
    </Layout>
  );
};

Insights.propTypes = {
  data: PropTypes.object.isRequired,
};

export const data = graphql`
  {
    allInsight(
      sort: { fields: created, order: DESC }
      filter: { field_hidden: { eq: false } }
    ) {
      nodes {
        ...InsightFragment
      }
    }
  }
`;

export default Insights;
