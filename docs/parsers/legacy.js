const utf8Decoder = new TextDecoder("utf-8");
const leregex = /[\r\n]{1,2}/;
async function* iterate(reader) {
  const utf8Decoder = new TextDecoder("utf-8");
  let { value: chunk, done } = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : "";

  let re = /\r\n|\n|\r/gm;
  let startIndex = 0;
  let result;

  for (;;) {
    let result = re.exec(chunk);

    if (!result) {
      if (done) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({ value: chunk, done } = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");

      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex < chunk.length) {
    yield chunk.substr(startIndex);
  }
}

class lineReader {
  constructor(reader) {
    (async function () {
      for await (let line of iterate(reader)) {
        console.log("Line", line);
      }
    })();
  }
}

class tle extends lineReader {
  constructor(reader) {
    super(reader);
  }
}
const satcat = null;
const vcm = null;

export { tle, satcat, vcm };
