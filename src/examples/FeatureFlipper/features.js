const featureFlippers = {
  features: ['double_column']
};

const featureFlippersPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(featureFlippers);
  }, 2000);
});

export default featureFlippersPromise;
