import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import packageJson from './package.json';

const external = [
  ...Object.keys(packageJson.dependencies ?? {}),
  ...Object.keys(packageJson.peerDependencies ?? {}),
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({ outputDir: path.resolve(__dirname, './.cache/dts') })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'TheLib',
      fileName: (format) => `the-lib.${format}.js`,
    },
    rollupOptions: {
      external,
    },
  },
});
