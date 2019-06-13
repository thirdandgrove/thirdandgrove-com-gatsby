/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import SplitSection from '../SplitSection';

const TextImage = ({ data }) => {
  return (
    <SplitSection padding='3rem'>
      {data.field_reversed ? (
        <>
          <Img
            fluid={
              data.relationships.field_image.localFile.childImageSharp.fluid
            }
          />
          <section
            dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
          />
        </>
      ) : (
        <>
          <section
            dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
          />
          <Img
            fluid={
              data.relationships.field_image.localFile.childImageSharp.fluid
            }
          />
        </>
      )}
    </SplitSection>
  );
};

TextImage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TextImage;
