// VisibilitySensor.jsx
// Lets us pass "once" to Visibility Sensor
// See https://markoskon.com/scroll-reveal-animations-with-react-spring/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VSensor from 'react-visibility-sensor';

class VisibilitySensor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }

  render() {
    const { active } = this.state;
    const { once, children, ...theRest } = this.props;
    return (
      <VSensor
        {...theRest}
        active={active}
        onChange={isVisible =>
          once &&
          isVisible &&
          this.setState({ active: false }, () =>
            console.log('turned the thing off!')
          )
        }
      >
        {({ isVisible }) => children({ isVisible })}
      </VSensor>
    );
  }
}

VisibilitySensor.propTypes = {
  once: PropTypes.bool,
  children: PropTypes.func.isRequired,
};

VisibilitySensor.defaultProps = {
  once: false,
};

export default VisibilitySensor;
