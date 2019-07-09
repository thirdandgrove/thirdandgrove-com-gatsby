import React from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { css } from '@emotion/core';

import { fonts, h1L, mediaQueries, container } from '../styles';
import ArticlePreview from '../components/ArticlePreview';
import Button from '../components/Button';
import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';

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

  return (
    <Layout
      headerData={{
        children: (
          <>
            <div
              css={css`
                margin-top: 20px;
                font-family: ${fonts.sans};
                font-size: 15px;
                letter-spacing: 2px;
                line-height: 2.4;
                text-transform: uppercase;
              `}
            >
              {`${headerArticle.created} - ${
                headerArticle.relationships.uid.name
              }`}
            </div>
            <h3
              data-cy='insightTitle'
              css={[
                h1L,
                css`
                  padding: 0 20px;
                  margin: 30px 0 60px;
                  text-align: center;
                  ${mediaQueries.phoneLarge} {
                    width: 70%;
                    margin: 40px auto 50px;
                  }
                `,
              ]}
            >
              {headerArticle.title}
            </h3>

            <Button onClick={() => navigate(`${headerArticle.path.alias}`)}>
              Read More
            </Button>
          </>
        ),
      }}
    >
      <FullWidthSection>
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
