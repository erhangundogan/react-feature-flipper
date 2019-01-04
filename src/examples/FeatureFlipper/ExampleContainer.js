import React from 'react';
import ExampleComponent from './ExampleComponent';

const ExampleContainer = () => (
  <div className="test-container">
    <ExampleComponent />
    <ExampleComponent />
    <div className="feature-flipper-disabled">
      <h3>Feature flipper disabled element/component</h3>
    </div>
  </div>
);

export default ExampleContainer;
