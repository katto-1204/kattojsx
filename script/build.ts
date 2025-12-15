import { build as viteBuild } from "vite";
import { rm } from "fs/promises";

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  console.log("Build complete! Static files ready for deployment.");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
