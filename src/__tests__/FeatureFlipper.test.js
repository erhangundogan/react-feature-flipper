import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import ExampleContainer from '../../examples/FeatureFlipper/ExampleContainer';

describe('featureFlipper HOC', () => {
  it('renders feature flipped component', async () => {
    const { getByText } = render(<ExampleContainer />);
    await waitForElement(() => getByText(/Feature flipper enabled component/i));
  });
});
