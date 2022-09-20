/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // node
  setupFilesAfterEnv: ["./src/__tests__/config/jsdom.ts"],
  modulePathIgnorePatterns: ["./src/__tests__/config/", "./dist"],
};
