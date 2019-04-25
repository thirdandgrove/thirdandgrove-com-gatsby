import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { css } from '@emotion/core';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default () => {
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
        const article = data.allNodeArticle.nodes[0];
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
                {`${article.created} -
              ${article.relationships.uid.field_first_name} ${
                  article.relationships.uid.field_last_name
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
                {article.title}
              </h3>
              <Link to={`/articles${article.path.alias}`}>read mode</Link>
            </Header>
            <nav>article categories navigation</nav>
            <p>list articles by category</p>
            <Footer />
          </>
        );
      }}
    />
  );
};
