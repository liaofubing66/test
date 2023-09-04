import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // 引入 path 模块
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false // css in js
        })
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 将 '@' 设置为 'src' 目录的别名
      components: path.resolve(__dirname, "src/components"), // 为 'src/components' 目录设置别名
      assets: path.resolve(__dirname, "src/assets")
    }
  }
});
