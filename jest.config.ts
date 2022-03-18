import type { Config } from "@jest/types";

// eslint-disable-next-line @typescript-eslint/require-await
export default async (): Promise<Config.InitialOptions> => ({
  displayName: "unit test",
  preset: "ts-jest",
  testEnvironment: "node",
  testRunner: "jest-circus/runner",
  testMatch: [
    "<rootDir>/packages/**/tests/**/*.test.ts",
    "<rootDir>/packages/**/tests/**/*.test.js",
    "<rootDir>/packages/**/tests/**/*.test.tsx",
  ],
  setupFilesAfterEnv: ["jest-extended/all"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.dev.json",
    },
  },
});
