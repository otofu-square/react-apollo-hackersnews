import { EnvPlugin, FuseBox, WebIndexPlugin } from "fuse-box";

const fuse = FuseBox.init({
  homeDir: "src",
  output: "build/$name.js",
  plugins: [
    WebIndexPlugin({
      path: "./",
      title: "Apollo sample app",
      template: "src/index.html",
    }),
    EnvPlugin({
      GRAPHCOOL_ENDPOINT: process.env.GRAPHCOOL_ENDPOINT,
    }),
  ],
});

fuse.dev({
  port: 3000,
});

fuse
  .bundle("bundle")
  .target("browser")
  .instructions(`>index.tsx`)
  .hmr();

fuse.run();
