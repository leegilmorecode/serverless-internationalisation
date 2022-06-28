module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>"],
  baseUrl: ".",
  modulePaths: ["."],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "@shared/(.*)": "<rootDir>/shared/$1",
    "@lib/(.*)": "<rootDir>/lib/$1",
    "@src/(.*)": "<rootDir>/src/$1",
  },
};
