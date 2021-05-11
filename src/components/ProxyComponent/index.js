import React from 'react';
import loadable from '@loadable/component';
import PropTypes from 'prop-types';

const ProxyComponent = ({ module }, props) => {
  const Loaded = loadable(() => import(`${module}`));

  return <Loaded {...props} />;
};

ProxyComponent.propTypes = {
  module: PropTypes.string,
};

ProxyComponent.defaultProps = {
  module: ``,
};

export default ProxyComponent;
