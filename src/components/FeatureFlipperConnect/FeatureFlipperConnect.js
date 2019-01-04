import React from 'react';

const featureFlipperConnect = ([WrappedComponent, feature]) => {
  class ffc extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        features: [],
      };
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

  return ffc;
};

export default featureFlipperConnect;
