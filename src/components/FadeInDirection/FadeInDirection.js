import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useHasBeenPartlyVisible } from '../../hooks/useVisibility';

const FadeInDirection = ({ children, distance, delay, overflow, ...rest }) => {
  const nodeRef = React.useRef();
  const isVisible = useHasBeenPartlyVisible(nodeRef, 0.4);
  const props = useSpring({
    delay: delay ? delay : 0.4,
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? 'translateY(0px)'
      : `translateY(${distance ? distance : '100px'})`,
    overflow: overflow ? overflow : 'hidden',
  });
  return (
    <animated.div ref={nodeRef} style={props} {...rest}>
      {children}
    </animated.div>
  );
};

export default FadeInDirection;
