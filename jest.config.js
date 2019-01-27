module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    "**/__tests__/*.(ts|tsx|js)"
  ],
  setupFiles: [
    "<rootDir>/enzyme.config.ts",
  ],
};