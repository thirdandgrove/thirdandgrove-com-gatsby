import { useEffect, useState } from 'react';

let intersectionObserver;
let intersectionObserverOptions = {};
const subscribers = new WeakMap();

const handleIntersections = entries =>
  entries.forEach(entry => subscribers.get(entry.target).call(null, entry));

const getIntersectionObserver = () => {
  if (!intersectionObserver) {
    intersectionObserver = new IntersectionObserver(
      handleIntersections,
      intersectionObserverOptions
    );
  }

  return intersectionObserver;
};

const setIntersectionObserverOptions = options => {
  if (intersectionObserver) {
    return;
  }

  intersectionObserverOptions = options;
};

const unwatch = domNode => {
  intersectionObserver.unobserve(domNode);
  subscribers.delete(domNode);
};
const watch = (domNode, callback) => {
  if (!domNode || subscribers.has(domNode)) {
    return;
  }

  subscribers.set(domNode, callback);
  getIntersectionObserver().observe(domNode);

  // eslint-disable-next-line consistent-return
  return () => unwatch(domNode);
};

const getSubscribers = () => subscribers;

const VO = {
  getSubscribers,
  setIntersectionObserverOptions,
  unwatch,
  watch,
};

export function useIsVisible(nodeRef) {
  const [isVisible, setVisible] = useState(false);

  function handleVisibilityChange({ isIntersecting }) {
    setVisible(isIntersecting);
  }

  useEffect(() => VO.watch(nodeRef.current, handleVisibilityChange), [nodeRef]);

  return isVisible;
}

export function useHasBeenVisible(nodeRef) {
  const [isVisible, setVisible] = useState(false);

  function handleVisibilityChange({ isIntersecting }) {
    if (isIntersecting === true) {
      setVisible(isIntersecting);
    }
  }

  useEffect(() => VO.watch(nodeRef.current, handleVisibilityChange), [nodeRef]);

  return isVisible;
}
