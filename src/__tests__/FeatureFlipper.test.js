import React from 'react';
import { render, waitForElement, wait } from 'react-testing-library';
import featureFlipper from '../featureFlipper';

const HelloWorld = () => (<div id="hello-world">Hello World!</div>);

const createPromise = (featureFlippers, isRejected) => new Promise(
  (resolve, reject) => {
    if (isRejected) {
      setTimeout(
        () => reject(new Error('Error occured!')), 1000,
      );
    }
    setTimeout(
      () => resolve(featureFlippers), 1000,
    );
  },
);

describe('featureFlipper wrapped component', () => {
  test('renders when feature flipper is enabled', async () => {
    const feature = 'hello_world';
    const HelloWorldFF = featureFlipper([
      HelloWorld,
      createPromise({ features: [feature] }),
      feature,
    ]);

    const { getByText } = render(<HelloWorldFF />);
    await waitForElement(() => getByText(/Hello World!/i));
  });

  test('doesn\'t render when feature flipper not exits', async () => {
    const HelloWorldFF = featureFlipper([
      HelloWorld,
      createPromise({ features: [] }),
      'hello_world',
    ]);

    const { container } = render(<HelloWorldFF />);
    await wait(
      () => expect(container.querySelectorAll('#hello-world').length).toEqual(0),
      { timeout: 2000 },
    );
  });

  test('doesn\'t render when promise fails', async () => {
    const feature = 'hello_world';
    const HelloWorldFF = featureFlipper([
      HelloWorld,
      createPromise({}, true),
      feature,
    ]);

    const { container } = render(<HelloWorldFF />);
    await wait(
      () => expect(container.querySelectorAll('#hello-world').length).toEqual(0),
      { timeout: 2000 },
    );
  });
});
