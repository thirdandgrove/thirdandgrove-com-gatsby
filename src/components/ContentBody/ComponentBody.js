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

const ComponentBody = ({ comps, type }) => {
  const validComps = comps.filter(comp => comp.relationships);
  const firstText = validComps.find(comp =>
    comp.relationships.component_type.name.toLowerCase().includes('text')
  );
  return (
    <>
      {validComps.map(comp => {
        // Dynamically select a component based on field name
        const componentName = comp.relationships.component_type.name
          .split(' ')
          .join('');
        const Component = Components[componentName];
        return (
          <Component
            data={{ ...comp, type, isFirstText: firstText.id === comp.id }}
            key={comp.id}
          />
        );
      })}
    </>
  );
};

ComponentBody.propTypes = {
  comps: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};

export default ComponentBody;
