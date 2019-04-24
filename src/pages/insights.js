import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
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
      render={data => (
        <>
          <Header>
            <span
              css={css`
                font-family: 'NB International Pro';
                font-size: 15px;
              `}
            >
              {`${data.allNodeArticle.nodes[0].created} -
              ${
                data.allNodeArticle.nodes[0].relationships.uid.field_first_name
              } ${
                data.allNodeArticle.nodes[0].relationships.uid.field_last_name
              }`}
            </span>
            <h3
              css={css`
                font-size: 72px;
                font-family: 'Canela-Medium';
                font-weight: 200;
                width: 60%;
                text-align: center;
              `}
            >
              {data.allNodeArticle.nodes[0].title}
            </h3>
            <p>read mode</p>
          </Header>
          <nav>article categories navigation</nav>
          <p>list articles by category</p>
          <Footer />
        </>
      )}
    />
  );
};
