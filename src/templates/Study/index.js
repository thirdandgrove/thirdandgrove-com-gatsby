import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';

const StudyTemplate = ({ data, pageContext }) => {
  const { study } = pageContext;

  return (
    <Layout
      headerData={{
        title: study.title,
      }}
    >
      <ul>
        {study.relationships.field_components.map(comp => {
          return <li>{comp.relationships.component_type.name}</li>;
        })}
      </ul>
    </Layout>
  );
};

StudyTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default StudyTemplate;
