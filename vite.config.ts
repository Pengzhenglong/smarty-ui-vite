import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

const rollupOptions = {

    external: ["vue", "vue-router"],
    output: {
      globals: {
        vue: "Vue",
      },
    },
  };
  
export default defineConfig({

    plugins: [
        vue()
    ],
    build: {
        rollupOptions,
        minify:false,
        lib: {
          entry: "./src/entry.ts",
          name: "SmartyUI",
          fileName: "smarty-ui",
          // 导出模块格式
          formats: ["esm", "umd","iife"],
        },
      },
});

