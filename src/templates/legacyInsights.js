import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import ReactHtmlParser from 'react-html-parser';

import { fonts, mediaQueries } from '../styles';
import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';

const LegacyInsights = ({ pageContext, data }) => {
  const article = pageContext.legacyInsight;

  const articleBodyElements = new ReactHtmlParser(article.body.value, {
    transform: function transform(node) {
      // html parser finds an image
      if (node.type === 'tag' && node.name === 'img') {
        const uuid = node.attribs['data-entity-uuid'];
        const foundFile = data.allFileFile.nodes.find(
          file => file.drupal_id === uuid
        );
        // guard against bad data, so much bad data.
        const src =
          foundFile &&
          foundFile.localFile &&
          foundFile.localFile.childImageSharp &&
          foundFile.localFile.childImageSharp.fluid;
        return src ? <Img fluid={src} /> : undefined;
      }

      return undefined;
    },
  });

  return (
    <Layout
      headerData={{
        metaTitle: article.title,
        children: (
          <>
            <span
              css={css`
                font-family: ${fonts.sans};
                font-size: 15px;
                padding: 32px;

                ${mediaQueries.xs} {
                  padding: 36px;
                }
              `}
            >
              {`${article.created} - ${article.relationships.uid.name}`}
            </span>
            <h3
              css={css`
                font-size: 72px;
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
      <FullWidthSection height='100%' padding='84px'>
        {articleBodyElements}
      </FullWidthSection>
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
      nodes {
        drupal_id
        localFile {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default LegacyInsights;
