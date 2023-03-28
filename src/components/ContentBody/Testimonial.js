import React from 'react';
import PropTypes from 'prop-types';

import TestimonialSlider from '../TestimonialSlider';
import { colors } from '../../styles';

const Testimonial = ({ data }) => {
  const { field_header_text: header } = data;
  const quotes = data.relationships.field_testimonial_slide;
  const testimonials = [];

  quotes.map(quote => {
    return testimonials.push({
      title: quote.field_quote,
      ...quote.relationships.field_image.localFile,
    });
  });

  return (
    <TestimonialSlider
      data={{ nodes: [...testimonials] }}
      showButton={false}
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
