import React from 'react';
import featureFlipper from '../../components/FeatureFlipper/FeatureFlipper';
import featureFlippersPromise from './features';
import './style.css';

const ExampleComponent = () => (
  <div className="example-component">
    <h3>Feature flipper enabled component</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse vel mi sit amet risus efficitur scelerisque in ac enim.
      Quisque vel ex orci. Orci varius natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Cras ultricies vitae mi at bibendum.
      Cras laoreet vel risus egestas tristique.
      Phasellus laoreet mollis quam, vitae venenatis eros euismod vitae.
    </p>
  </div>
);

// FeatureFlippedComponent will be rendered if "double_column" feature enabled
export default featureFlipper([ExampleComponent, featureFlippersPromise, 'double_column']);
