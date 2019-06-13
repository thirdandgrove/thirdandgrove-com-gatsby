import React from 'react';

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

export default ({ comp }) => {
  // Dynamically select a component based on field name
  const componentName = comp.relationships.component_type.name
    .split(' ')
    .join('');
  const Component = Components[componentName];
  return <Component key={JSON.stringify(comp)} data={comp} />;
};
