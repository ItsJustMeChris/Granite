import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "build/index.js",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [
    commonjs({
      include: ["node_modules/**"],
    }),
    nodeResolve({ browser: true, preferBuiltins: true }),
  ],
};
