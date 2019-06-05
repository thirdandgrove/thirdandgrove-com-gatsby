import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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

const Image = ({ id }) => {
  const data = useStaticQuery(graphql`
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
  `);
  // This is heavy, though a real dynamic query by ID is not possible
  // currently this will remain in use until an alternative is made available
  const foundNode = data.allFileFile.nodes.find(node => node.id === id);
  // guarding against bad data
  const fluid =
    foundNode &&
    foundNode.localFile &&
    foundNode.localFile.childImageSharp &&
    foundNode.localFile.childImageSharp.fluid;
  return foundNode ? <Img fluid={fluid} /> : null;
};
export default Image;
