import React from 'react';
import ViewportObserver from './ViewportObserver';

const LazyImage = ({ src }) => (
  <ViewportObserver render=
    {(hasBeenInViewport, domRef) => (
      <img ref={domRef} src={hasBeenInViewport ? src : null/* you can render loading indicator here*/} alt="abstract photograph" />
    )}
  />
);

export default LazyImage;
