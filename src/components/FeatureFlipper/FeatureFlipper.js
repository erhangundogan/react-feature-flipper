import React from 'react';

/**
 * featureFlipper HOC
 *
 * @param {function} WrappedComponent - Component needs to be feature flipped
 * @param {Promise} featureFlippersPromise - Promise object to resolve feature flippers
 * @param {string=} feature - specify feature flipper for component or
 *  leave it empty to use component name as a feature
 * @returns {function}
 */
const featureFlipper = ([WrappedComponent, featureFlippersPromise, feature]) => {
  class ff extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        features: [],
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
          { <WrappedComponent /> }
        </>
      );
    }
  }

  return ff;
};

export default featureFlipper;
