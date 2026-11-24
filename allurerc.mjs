import { defineConfig } from 'allure';

export default defineConfig({
  qualityGate: {
    rules: [
      {
        maxFailures: 3,
      },
    ],
  },
});
