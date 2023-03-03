import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src",
  plugins: [],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src", "assets"),
      "@css": path.resolve(__dirname, "src", "css"),
      "@js": path.resolve(__dirname, "src", "js"),
      "@lib": path.resolve(__dirname, "src", "lib"),
      "@utils": path.resolve(__dirname, "src", "utils"),
      "@images": path.resolve(__dirname, "src", "assets", "images"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src", "index.html"),
        Men: path.resolve(__dirname, "src", "Men.html"),
        Women: path.resolve(__dirname, "src", "women.html"),
        blog: path.resolve(__dirname, "src", "blog.html"),
        singleproduct: path.resolve(__dirname, "src", "single-product.html"),
        login: path.resolve(__dirname, "src", "login.html"),
        cart: path.resolve(__dirname, "src", "cart.html"),
        contact: path.resolve(__dirname, "src", "contact.html"),
      },
    },
  },
});
