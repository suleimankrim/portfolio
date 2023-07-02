import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from "rollup-plugin-typescript2";

export default {
  input: 'src/main.ts',
  output: { file: 'dist/bundle.js' },
  plugins: [typescript({ module: "esnext" }), nodeResolve({ browser: true }), terser()],
};
