const fs = require("fs/promises");
const path = require("path");
const { minify } = require("terser");
const { createHash } = require("crypto");
const yargs = require('yargs/yargs');
const argv = yargs(process.argv.slice(2)).argv

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");
const horlogeJsPath = path.resolve(srcPath, "js", "horloge.js");
const indexJsPath = path.resolve(srcPath, "js", "index.js");
const indexHtmlPath = path.resolve(srcPath, "index.html");
const indexHtmlDistPath = path.resolve(distPath, "index.html");
const appJsDistPath = path.resolve(distPath, "app.js");

async function rmAndMkdir() {
  await fs.rm(distPath, { recursive: true, force: true });
  await fs.mkdir(distPath);
  console.log('rm and mkdir dist OK');
}

async function buildJs() {
  const bufferHorloge = await fs.readFile(horlogeJsPath);
  const bufferIndex = await fs.readFile(indexJsPath);
  let content = Buffer.concat([bufferHorloge, bufferIndex]);
  let hash = '';

  if (argv.minify) {
    const { code } = await minify(content.toString());
    content = code;
  }

  if (argv.hash) {
    hash = createHash('md5').update(content).digest('hex');
  }

  const filename = hash ? appJsDistPath.replace('.js', `.${hash}.js`) : appJsDistPath;
  await fs.writeFile(filename, content);
  // await fs.writeFile(appJsDistPath, bufferHorloge);
  // await fs.appendFile(appJsDistPath, bufferIndex);
  console.log('build JS OK');
  return hash;
}

async function buildHtml(hash) {
  const buffer = await fs.readFile(indexHtmlPath);

  const content = buffer
    .toString('utf-8')
    .replace(
      '<script src="./js/horloge.js"></script>',
      hash ? `<script src="./app.${hash}.js"></script>` : '<script src="./app.js"></script>'
    )
    .replace('<script src="./js/index.js"></script>', "");

  await fs.writeFile(indexHtmlDistPath, content);
  console.log('build HTML OK');
}

async function main() {
  await rmAndMkdir();
  const hash = await buildJs();
  await buildHtml(hash);
  console.log('build DONE');
}

main();
