import React from 'react';
import { render, waitForElement, wait } from 'react-testing-library';
import featureFlipperPromise from '../featureFlipperPromise';

const HelloWorld = () => (<div id="hello-world">Hello World!</div>);

const createPromise = (featureFlippers, isRejected) => new Promise(
  (resolve, reject) => {
    if (isRejected) {
      setTimeout(
        () => reject(new Error('Error occured!')), 1000
      );
    }
    setTimeout(
      () => resolve(featureFlippers), 1000
    );
  },
);

describe('featureFlipper', () => {
  test('renders the component when feature flipper is enabled', async () => {
    const feature = 'hello_world';
    const HelloWorldFF = featureFlipperPromise([
      HelloWorld,
      createPromise({ features: [feature] }),
      feature
    ]);

    const { getByText } = render(<HelloWorldFF />);
    await waitForElement(() => getByText(/Hello World!/i));
  });

  test('doesn\'t render the component when feature flipper is disabled', async () => {
    const HelloWorldFF = featureFlipperPromise([
      HelloWorld,
      createPromise({ features: [] }),
      'hello_world'
    ]);

    const { container } = render(<HelloWorldFF />);
    await wait(
      () => expect(container.querySelectorAll('#hello-world').length).toEqual(0),
      { timeout: 2000 }
    );
  });

  test('doesn\'t render the component when promise fails', async () => {
    const feature = 'hello_world';
    const HelloWorldFF = featureFlipperPromise([
      HelloWorld,
      createPromise({}, true),
      feature
    ]);

    const { container } = render(<HelloWorldFF />);
    await wait(
      () => expect(container.querySelectorAll('#hello-world').length).toEqual(0),
      { timeout: 2000 }
    );
  });

  test('uses component name for the feature flipper if third param omitted', async () => {
    const feature = 'HelloWorld';
    const HelloWorldFF = featureFlipperPromise([
      HelloWorld,
      createPromise({ features: [feature] })
    ]);

    const { getByText } = render(<HelloWorldFF />);
    await waitForElement(() => getByText(/Hello World!/i));
  });
});
