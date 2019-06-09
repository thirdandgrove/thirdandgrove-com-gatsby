import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { fonts, weights } from '../styles';

import ArticlePreview from '../components/ArticlePreview';
import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';

export default () => {
  const List = styled.div`
    display: grid;
    margin: 0 auto;
    width: 80vw;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 250px;
    place-items: center center;
  `;
  return (
    <StaticQuery
      query={graphql`
        {
          allInsight {
            nodes {
              id
              title
              field_inverse_header
              created(formatString: "MMMM DD YYYY")
              relationships {
                node_type {
                  name
                }
                field_tags {
                  id
                }
                uid {
                  name
                }
                field_components {
                  ... on component__text {
                    relationships {
                      component_type {
                        name
                      }
                    }
                    field_body {
                      processed
                    }
                  }
                  ... on component__image {
                    relationships {
                      component_type {
                        name
                      }
                      field_image {
                        id
                        localFile {
                          publicURL
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const articles = data.allInsight.nodes;
        // newest article is in the header
        const headerArticle = articles[0];

        return (
          <Layout
            headerData={{
              children: (
                <>
                  <span
                    css={css`
                      font-family: ${fonts.sans};
                      font-size: 15px;
                      padding: 2rem;
                    `}
                  >
                    {`${headerArticle.created} - ${
                      headerArticle.relationships.uid.name
                    }`}
                  </span>
                  <h3
                    css={css`
                      font-size: 72px;
                      font-family: ${fonts.serif};
                      font-weight: ${weights.medium};
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
                    to={`/insights/${headerArticle.title
                      .toLowerCase()
                      .replace(/ /g, '-')}`}
                  >
                    read more
                  </Link>
                </>
              ),
            }}
          >
            <FullWidthSection height='100%' padding='2rem'>
              <List>
                {articles.slice(1).map(article => (
                  <ArticlePreview key={article.title} article={article} />
                ))}
              </List>
            </FullWidthSection>
          </Layout>
        );
      }}
    />
  );
};
