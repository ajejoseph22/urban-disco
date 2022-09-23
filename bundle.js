const path = require("path");
const { createWriteStream, promises: fs } = require("fs");
const archiver = require("archiver");

const IGNORE = [".DS_Store", "node_modules", ".next", "yarn-error.log"];

(async () => {
  const pkg = JSON.parse(
    await fs.readFile(path.resolve(__dirname, "package.json"), "utf-8")
  );
  const { name, version } = pkg;

  const out = `${name}-${version}.zip`;

  IGNORE.push(out);

  await archiveDirectory(__dirname, out);
})();

function archiveDirectory(srcDir, out) {
  return new Promise(async (res, rej) => {
    const archive = archiver("zip", { zlib: { level: 9 } });
    const outStream = createWriteStream(out);

    archive.on("error", (err) => rej(err));

    archive.pipe(outStream);

    outStream.on("close", () => res());

    const dir = await fs.readdir(srcDir, { withFileTypes: true });

    for (const file of dir) {
      if (!IGNORE.includes(file.name)) {
        if (file.isDirectory()) {
          archive.directory(file.name);
        } else {
          archive.file(file.name);
        }
      }
    }

    archive.finalize();
  });
}
