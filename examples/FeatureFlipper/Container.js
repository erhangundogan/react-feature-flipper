import React from 'react';
import ComponentFeatureFlippedPromise from './ComponentFeatureFlippedPromise';
import {
  ComponentFeatureFlippedStaticEnabled,
  ComponentFeatureFlippedStaticDisabled
} from './ComponentFeatureFlippedStatic';

const Container = () => (
  <div className="test-container">
    <ComponentFeatureFlippedPromise />
    <ComponentFeatureFlippedPromise />
    <div className="feature-flipper-disabled">
      <h3>Feature flipper disabled element/component</h3>
    </div>
    <ComponentFeatureFlippedStaticEnabled />
    <ComponentFeatureFlippedStaticDisabled />
  </div>
);

export default Container;
