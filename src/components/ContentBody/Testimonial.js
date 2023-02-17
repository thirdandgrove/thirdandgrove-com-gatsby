import React from 'react';
import PropTypes from 'prop-types';

import TestimonialSlider from '../TestimonialSlider';
import { colors } from '../../styles';

const Testimonial = ({ data }) => {
  const { field_header_text: header } = data;
  const { field_quotes: quotes } = data;
  const images = data.relationships.field_images;
  const testimonials = [];
  for (let index = 0; index < quotes.length; index += 1) {
    testimonials.push({
      title: quotes[index],
      ...images[index].localFile,
    });
  }

  return (
    <TestimonialSlider
      data={{ nodes: [...testimonials] }}
      showButton
      backgroundColor={colors.white}
      title={header}
      arrows
    />
  );
};

Testimonial.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Testimonial;
