import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import ReactHtmlParser from 'react-html-parser';

import Layout from '../components/layout';

const LegacyInsights = ({ pageContext, data }) => {
  const article = pageContext.legacyInsight;

  const articleBodyElements = new ReactHtmlParser(article.body.processed, {
    transform: function transform(node) {
      // html parser finds an image
      if (node.type === 'tag' && node.name === 'img') {
        const uuid = node.attribs['data-entity-uuid'];
        const foundFile = data.allFileFile.edges.find(
          file => file.node.drupal_id === uuid && file.node.localFile
        );
        // guard against bad data, so much bad data.
        const src =
          foundFile &&
          foundFile.node.localFile &&
          foundFile.node.localFile.childImageSharp &&
          foundFile.node.localFile.childImageSharp.fluid;
        return src ? <Img alt='alt' fluid={src} /> : undefined;
      }

      return undefined;
    },
  });

  return (
    <Layout
      headerData={{
        children: (
          <>
            <span
              css={css`
                font-family: 'NB International Pro';
                font-size: 15px;
                padding: 2rem;
              `}
            >
              {`${article.created} - ${article.relationships.uid.name}`}
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
          </>
        ),
      }}
    >
      {ReactHtmlParser(article.body.processed)}
    </Layout>
  );
};

LegacyInsights.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    allFileFile {
      edges {
        node {
          drupal_id
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default LegacyInsights;
