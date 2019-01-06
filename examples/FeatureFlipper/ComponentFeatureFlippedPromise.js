import React from 'react';
import { featureFlipperPromise } from '../../dist/react-feature-flipper';
import featureFlippersList from './features';

const Component = () => (
  <div className="example-component">
    <h3>Feature flipper enabled component</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
);

// FeatureFlippedComponent will be rendered if "double_column" feature enabled
export default featureFlipperPromise([Component, featureFlippersList, 'double_column']);
