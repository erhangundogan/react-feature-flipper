module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/!(*.test).js',
    '!index.js'
  ],
  coverageReporters: ['text'],
  verbose: true,
  moduleFileExtensions: ['js'],
  rootDir: 'src'
};
