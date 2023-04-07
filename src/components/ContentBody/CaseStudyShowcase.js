import React from 'react';
import PropTypes from 'prop-types';

import ProjectsSlider from '../ProjectsSlider';

const CaseStudyShowcase = ({ data }) => {
  const content = { nodes: data.relationships.field_case_studies };
  return <ProjectsSlider data={content} />;
};

CaseStudyShowcase.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CaseStudyShowcase;
