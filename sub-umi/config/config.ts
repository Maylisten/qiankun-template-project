import { defineConfig } from "@umijs/max";
import routes from "./routes";

export default defineConfig({
  base: "/umi",
  routes,
  npmClient: "npm",
  tailwindcss: {},
  qiankun: {
    slave: {},
  },
});
