const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: '/', // Assuming your project root is '/'
});

const config = {
  ...createJestConfig,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Add this line to transform JSX files
  },
  moduleNameMapper: {
    // Handle CSS imports
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    // Handle image imports
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  // Other Jest configuration options can be added here if needed
};

module.exports = config;
