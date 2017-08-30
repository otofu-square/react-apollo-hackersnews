import { FuseBox } from "fuse-box";

const fuse = FuseBox.init({
  homeDir: "src",
  output: "build/$name.js",
});

fuse.bundle("bundle").instructions(`>index.ts`);

fuse.run();
