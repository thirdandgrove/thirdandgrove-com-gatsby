import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

const Hero = ({ data }) => {
  const {
    field_header_text: title,
    field_primary_cta: cta,
    field_body: body,
    field_primary_color: { color },
    field_text_color: textColor,
  } = data;
  const backgroundImage =
    data.relationships.field_media_background.localFile.publicURL;

  const headerData = {
    title,
    body: body.processed,
    cta: [cta],
    color,
    textColor,
    heroImage: backgroundImage,
    heroImageMobile: backgroundImage,
    mobileMinHeight: '93vh',
  };

  return <Header {...headerData} />;
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
