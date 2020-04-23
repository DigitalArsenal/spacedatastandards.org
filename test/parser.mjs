import { createReadStream } from "fs";
import { tle, satcat, vcm } from "../docs/parsers/legacy.mjs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

let rs = createReadStream(join(__dirname, "/all.txt"));
console.log();
rs.on("readable", async () => {
  let value, done;
  for (;;) {
    value = await rs.read();
    done = value === null;
    if (value && !done) console.log(value.toString());
    if (done) break;
  }
});

//let tt = new tle(rs);
