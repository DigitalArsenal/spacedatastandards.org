const utf8Decoder = new TextDecoder("utf-8");
const leregex = /\r\n|\n|\r/gm;

class tle {
  constructor(reader, rows, threeline) {
    let lineNum = [69];
    if (threeline) lineNum.push(24);

    return new ReadableStream(
      {
        async start(controller) {
          let _buffer = "";

          while (true) {
            const { done, value } = await reader.read();
            let val = utf8Decoder.decode(value);
            _buffer += val;
            if (done) {
              let _rows = _buffer.split(leregex);
              let last = [];
              _rows.forEach((r) => {
                if (lineNum.indexOf(r.length) > -1) {
                  last.push(r);
                }
                if (last.length === (threeline ? 3 : 2)) {
                  rows.push(last);
                  last = [];
                }
              });
              break;
            }

            controller.enqueue(value);
          }

          // Close the stream
          controller.close();
          reader.releaseLock();
        },
      },
      new ByteLengthQueuingStrategy({ highWaterMark: 8 * 81 })
    );
  }
}
const satcat = null;
const vcm = null;

export { tle, satcat, vcm };
