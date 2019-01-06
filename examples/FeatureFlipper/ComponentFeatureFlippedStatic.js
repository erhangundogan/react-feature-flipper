import React from 'react';
import featureFlipperStatic from '../../dist/react-feature-flipper';

const Component = () => (
  <div className="example-component">
    <h3>Feature flipper enabled component</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
);

export const ComponentFeatureFlippedStaticEnabled = featureFlipperStatic([Component]);
export const ComponentFeatureFlippedStaticDisabled = featureFlipperStatic([Component, false]);
