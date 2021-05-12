import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import Quote from './Quote';
import Text from './Text';
import TextSplitwithImage from './TextImage';
import TextSplitwithVideoPhone from './TextVideoPhone';
import Prefooter from './Prefooter';
import Video from './Video';

const Components = {
  Image,
  Quote,
  Text,
  TextSplitwithImage,
  TextSplitwithVideoPhone,
  Prefooter,
  Video,
};

/**
 * ContentBody maps content body components
 * @param {array!} comps Components from Drupal
 * @param {string!} type Content type from Drupal
 */
const ContentBody = ({ comps, type, trim }) => {
  if (!Array.isArray(comps)) {
    throw new Error(
      `Comps prop is not an array, ${typeof comps} cannot be passed to ContentBody.`
    );
  }
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
        return trim && firstText.id === comp.id ? (
          <Component
            data={{
              ...comp,
              type,
              isFirstText: firstText.id === comp.id,
              trim,
            }}
            key={comp.id}
          />
        ) : (
          <Component
            data={{
              ...comp,
              type,
              isFirstText: firstText.id === comp.id,
            }}
            key={comp.id}
          />
        );
      })}
    </>
  );
};

ContentBody.propTypes = {
  comps: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
  trim: PropTypes.bool,
};

ContentBody.defaultProps = {
  trim: true,
};

export default ContentBody;
