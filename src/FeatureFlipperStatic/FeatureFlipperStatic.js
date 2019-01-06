import React from 'react';

/**
 * featureFlipperStatic HOC
 *
 * @param {function} WrappedComponent Component needs to be feature flipped
 * @param {boolean} [isEnabled=true] boolean value to enable/disable feature
 * @returns {function}
 */
const featureFlipperStatic = ([WrappedComponent, isEnabled = true]) => () => {
  if (isEnabled) {
    return (
      <>
        <WrappedComponent />
      </>
    );
  }
  return null;
};

export default featureFlipperStatic;
