import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import ContentBody from '../../components/ContentBody';

const StudyTemplate = ({ pageContext }) => {
  const { study } = pageContext;

  return (
    <Layout
      headerData={{
        title: study.title,
      }}
    >
      {study.relationships.field_components.map(comp => {
        // Dynamically select a component based on field name
        const componentName = comp.relationships.component_type.name
          .split(' ')
          .join('');
        const Component = ContentBody[componentName];
        return <Component key={JSON.stringify(comp)} data={comp} />;
      })}
    </Layout>
  );
};

StudyTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default StudyTemplate;
