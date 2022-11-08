import fs from "fs";
import { createGzip } from "zlib";

const readStream = fs.createReadStream("bigfile.html", { encoding: "utf-8" });

readStream.on("open", () => {
  console.log("bigfile.html opened");
});

readStream.on("data", (chunk) => {
  console.log("bigfile.html data", chunk.length);
});

readStream.on("close", () => {
  console.log("bigfile.html closed");
});

const writeStream = fs.createWriteStream("bigfile.html.gz");

// cat bigfile.html | gzip > bigfile.html.gz
readStream.pipe(createGzip()).pipe(writeStream);

// ReadStream : lecture (read)
// WriteStream : écriture (write)
// DuplexStream : lecture + écriture (read + write)
// TransformStream : lecture + écriture (read + write) avec une transformation
