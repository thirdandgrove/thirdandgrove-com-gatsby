import React, { useState, useEffect } from 'react';

export default () => {
  const [windowSize, setWindowSize] = useState(() => ({
    width: window && window.innerWidth,
    height: window && window.innerHeight,
  }));

  useEffect(() => {
    const onResize = () =>
      setWindowSize({
        width: window && window.innerWidth,
        height: window && window.innerHeight,
      });
    if (window) window.addEventListener('resize', onResize);
    return () => window && window.removeEventListener('resize', onResize);
  });

  return windowSize;
};
