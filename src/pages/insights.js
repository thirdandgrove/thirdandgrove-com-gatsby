import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import ArticlePreview from '../components/ArticlePreview';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default () => {
  const List = styled.div`
    display: flex;
    width: 100%;
    align-content: center;
    flex-wrap: wrap;
  `;
  return (
    <StaticQuery
      query={graphql`
        {
          allNodeArticle(sort: { fields: created, order: DESC }, limit: 10) {
            nodes {
              title
              body {
                processed
                summary
              }
              path {
                alias
              }
              created(formatString: "MMMM DD YYYY")
              relationships {
                uid {
                  name
                  field_last_name
                  field_first_name
                }
              }
            }
          }
        }
      `}
      render={data => {
        const articles = data.allNodeArticle.nodes;
        // newest article is in the header
        const headerArticle = articles[0];
        return (
          <>
            <Header>
              <span
                css={css`
                  font-family: 'NB International Pro';
                  font-size: 15px;
                  padding: 2rem;
                `}
              >
                {`${headerArticle.created} -
              ${headerArticle.relationships.uid.field_first_name} ${
                  headerArticle.relationships.uid.field_last_name
                }`}
              </span>
              <h3
                css={css`
                  font-size: 72px;
                  font-family: 'Canela-Medium';
                  font-weight: 200;
                  width: 70%;
                  text-align: center;
                `}
              >
                {headerArticle.title}
              </h3>
              <Link
                css={css`
                  text-decoration: none;
                  color: white;
                `}
                to={`/articles${headerArticle.path.alias}`}
              >
                read more
              </Link>
            </Header>
            <nav>
              <ul>
                <li>All</li>
                <li>Design</li>
                <li>Strategy</li>
                <li>Engineering</li>
                <li>Shopify</li>
                <li>Acquia</li>
                <li>Drupal</li>
              </ul>
            </nav>
            <List>
              {articles.map(article => (
                <ArticlePreview key={article.title} article={article} />
              ))}
            </List>
            <Footer />
          </>
        );
      }}
    />
  );
};
