import React from 'react';

/**
 * featureFlipperPromise HOC
 *
 * @param {function} WrappedComponent Component needs to be feature flipped
 * @param {Promise} featureFlippersPromise Promise object to resolve feature flippers
 * @param {string} [feature=Component name] Specifies feature flipper name
 * @returns {function}
 */
const featureFlipperPromise = ([WrappedComponent, featureFlippersPromise, feature]) => {
  class ff extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        features: []
      };
    }

    componentDidMount() {
      featureFlippersPromise.then(
        featureFlippers => this.setState({ features: featureFlippers.features })
      );
    }

    isFeatureEnabled() {
      const { features } = this.state;
      return features.includes(feature || WrappedComponent.name);
    }

    render() {
      if (!this.isFeatureEnabled()) {
        return null;
      }
      return (
        <>
          <WrappedComponent />
        </>
      );
    }
  }

  return ff;
};

export default featureFlipperPromise;
