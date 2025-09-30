import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import serve from "rollup-plugin-serve";

const production = !process.env.ROLLUP_WATCH;

const modernConfig = {
  input: {
    "auro-pane__bundled": "./index.js",
  },
  output: {
    format: "esm",
    dir: "dist/",
  },
  plugins: [
    nodeResolve(),
    json(),
    !production &&
      serve({
        open: true,
        openPage: "/docs/",
      }),
  ],
};

const indexExamplesConfig = {
  input: {
    "index.min": "./demo/index.js",
  },
  output: {
    format: "esm",
    dir: "demo/",
  },
  plugins: [nodeResolve(), json()],
};

const apiExamplesConfig = {
  input: {
    "api.min": "./demo/api.js",
  },
  output: {
    format: "esm",
    dir: "demo/",
  },
  plugins: [nodeResolve(), json()],
};

export default [modernConfig, indexExamplesConfig, apiExamplesConfig];
