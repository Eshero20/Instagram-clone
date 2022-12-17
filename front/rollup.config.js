import graphql from "@rollup/plugin-graphql";
export default {
  input: "src/index.js",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [graphql()],
};
