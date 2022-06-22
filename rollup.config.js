import { name } from "./package.json";
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import eslint from "@rollup/plugin-eslint";
export const file = (type) => `dist/index.${type}.js`;

const overrides = {
  compilerOptions: {
    noUnusedParameters: true,
    noUnusedLocals: true,
    strictNullChecks: true,
    moduleResolution: "node",
    declaration: true,
    allowSyntheticDefaultImports: true,
  },
  useTsconfigDeclarationDir: true,
};
export default {
  input: "src/index.ts",
  output: [
    {
      name,
      file: file("umd"),
      format: "umd",
    },
    {
      file: file("esm"),
      format: "es",
    },
  ],
  plugins: [
    eslint({
      exclude: ["node_modules"],
    }),
    typescript({
      tsconfigOverride: overrides,
    }),
    nodeResolve({
      extensions: [".js", ".jsx", ".ts", ".tsx", ".less"], //允许我们加载第三方模块
    }),
    commonjs(), // 转换为ES6版本
  ],
};
