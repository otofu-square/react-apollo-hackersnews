import { FuseBox, WebIndexPlugin } from "fuse-box";

const fuse = FuseBox.init({
  homeDir: "src",
  output: "build/$name.js",
  plugins: [
    WebIndexPlugin({
      path: "./",
      title: "Apollo sample app",
      template: "src/index.html",
    }),
  ],
});

fuse.dev({
  port: 3000,
});

fuse.bundle("bundle").instructions(`>index.tsx`).hmr();

fuse.run();
