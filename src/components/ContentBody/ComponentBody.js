import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import Quote from './Quote';
import Text from './Text';
import TextSplitwithImage from './TextImage';
import TextSplitwithQuote from './TextQuote';
import Prefooter from './Prefooter';

const Components = {
  Image,
  Quote,
  Text,
  TextSplitwithImage,
  TextSplitwithQuote,
  Prefooter,
};

const ComponentBody = ({ comp }) => {
  // Ensure relationships exists before rendering.
  console.log(comp);
  if (comp.relationships == null) {
    return <div />;
  }

  // Dynamically select a component based on field name
  const componentName = comp.relationships.component_type.name
    .split(' ')
    .join('');
  const Component = Components[componentName];
  return <Component data={comp} />;
};

ComponentBody.propTypes = {
  comp: PropTypes.object.isRequired,
};

export default ComponentBody;
