import React from 'react';
import PropTypes from 'prop-types';

import InsightsSlider from '../InsightsSlider';

const FeaturedContent = ({ data }) => {
  const { field_header_text: header } = data;
  const content = { nodes: data.relationships.field_content };

  return <InsightsSlider data={content} title={header} showButton={false} />;
};

FeaturedContent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FeaturedContent;
