import React from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { css } from '@emotion/core';

import {
  fonts,
  weights,
  h1L,
  mediaQueries,
  container,
  colors,
} from '../styles';
import ArticlePreview from '../components/ArticlePreview';
import Button from '../components/Button';
import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';
import { ensureTrailingSlash } from '../util';

export default () => {
  const data = useStaticQuery(graphql`
    {
      allInsight {
        nodes {
          ...InsightFragment
        }
      }
    }
  `);
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
        children: (
          <>
            <span
              data-cy='labelText'
              css={css`
                margin-bottom: 32px;
                font-family: ${fonts.sans};
                font-size: 15px;
                font-weight: ${weights.light};
                line-height: 2.4;
                text-transform: capitalize;
                color: ${colors.darkgray};
                text-align: center;
                padding-left: 20px;
                padding-right: 20px;

                ${mediaQueries.desktop} {
                  margin-bottom: 42px;
                }
              `}
            >
              {`${headerArticle.created} – ${
                headerArticle.relationships.uid.name
              }`}
            </span>
            <h3 data-cy='insightTitle' css={[h1L, headerStyles]}>
              {headerArticle.title}
            </h3>

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
              ${mediaQueries.phoneLarge} {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: 10%;
                place-items: center top;
                padding-top: 90px;
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
