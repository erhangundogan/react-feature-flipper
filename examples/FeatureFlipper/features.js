const featureFlippers = {
  features: ['double_column']
};

const featureFlippersPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(featureFlippers);
  }, 1000);
});

export default featureFlippersPromise;
