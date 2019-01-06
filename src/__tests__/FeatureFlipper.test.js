import React from 'react';
import { render } from 'react-testing-library';
import featureFlipperStatic from '../FeatureFlipperStatic';

const HelloWorld = () => (<div id="hello-world">Hello World!</div>);

describe('featureFlipper', () => {
  test('renders the component when the feature is enabled', () => {
    const HelloWorldFF = featureFlipperStatic([HelloWorld]); // second item is 'true' by default
    const { container } = render(<HelloWorldFF />);

    expect(container.querySelectorAll('#hello-world').length).toEqual(1);
  });

  test('doesn\'t render the component when the feature is disabled', () => {
    const HelloWorldFF = featureFlipperStatic([HelloWorld, false]);
    const { container } = render(<HelloWorldFF />);

    expect(container.querySelectorAll('#hello-world').length).toEqual(0);
  });
});
