// vite.config.ts or vitest.config.ts
import { defineConfig } from 'vitest/config'; // <-- Change this line!

export default defineConfig({
  // Your Vite configurations (plugins, etc.)
  plugins: [],
  // ... other Vite options

  // Now, the 'test' property is recognized correctly
  test: {
    // Your Vitest specific configurations
    globals: true,
    environment: 'jsdom',
    // ... other Vitest options
  },
});