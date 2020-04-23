const utf8Decoder = new TextDecoder("utf-8");
let leRegex = /[\r\n]{1,2}/gm;

async function* iterate(reader) {
  const utf8Decoder = new TextDecoder("utf-8");
  let { value, done } = await reader.read();
  value = value ? utf8Decoder.decode(value) : "";

  let startIndex = 0;

  while (!done) {
    let result = leRegex.exec(value);
    //only progress if there are more lines
    if (!result) {
      //loop through each successive line
      let remainder = value.substr(startIndex);
      ({ value, done } = await reader.read());
      //add more if available
      value = remainder + (value ? utf8Decoder.decode(value) : "");
      startIndex = leRegex.lastIndex = 0;
    } else {
      yield value.substring(startIndex, result.index);
    }
    startIndex = leRegex.lastIndex;
  }

  if (startIndex < value.length) {
    yield value.substr(startIndex);
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
