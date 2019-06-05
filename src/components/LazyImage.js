import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = ({ id }) => (
  // This is heavy, though a real dynamic query by ID is not possible
  // currently this will remain in use until an alternative is made available
  <StaticQuery
    query={graphql`
      query {
        allFileFile {
          nodes {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 1800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={
          data.allFileFile.nodes.find(node => node.id === id).localFile
            .childImageSharp.fluid
        }
      />
    )}
  />
);
export default Image;
