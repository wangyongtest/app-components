const path = require("path");
const fs = require("fs");
const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");
const vueJsx = require("@vitejs/plugin-vue-jsx");

const entryDir = path.resolve(__dirname, "../../app-components");
const outputDir = path.resolve(__dirname, "../../build");

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
});

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// 全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, "appCom.ts"),
          name: "appCom",
          fileName: "appCom",
          formats: ["es", "umd"],
        },
        outDir: outputDir,
      },
    })
  );
};

const buildLib = async () => {
  await buildAll();
};

buildLib();
