import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Use jsdom for simulating DOM interactions
    globals: true, // This enables globals like `describe`, `it`, `expect`
  },
});
