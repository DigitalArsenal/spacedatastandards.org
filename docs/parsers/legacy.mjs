//https://celestrak.com/NORAD/documentation/spacetrk.pdf

// [-1, +1]
const tleTransform = {
  1: {
    NORAD_CAT_ID: [3, 7],
    CLASSIFICATION_TYPE: [7, 8],
    OBJECT_ID: [8, 18],
    EPOCH: [18, 33],
    MEAN_MOTION_DOT: [33, 44],
    MEAN_MOTION_DDOT: [44, 53],
    BSTAR: [53, 62],
    EPHEMERIS_TYPE: [62, 64],
    ELEMENT_SET_NO: [64, 68],
    CHECKSUM: [69, 70]
  },
  2: {
    INCLINATION: [8, 17],
    RA_OF_ASC_NODE: [17, 26],
    ECCENTRICITY: [26, 34],
    ARG_OF_PERICENTER: [34, 43],
    MEAN_ANOMALY: [43, 52],
    MEAN_MOTION: [52, 63],
    REV_AT_EPOCH: [63, 68],
    CHECKSUM: [69, 70]
  }
};


class lineReader {
  constructor(reader) {
    this.reader = reader;
    this.processLine = (line) => line;

    this.readLines = async () => {
      async function* rr() {
        const utf8Decoder = new TextDecoder("utf-8");
        let leRegex = /[\r\n]{1,2}/gm;

        let { value, done } = await reader.read();
        value = value ? utf8Decoder.decode(value) : "";

        let startIndex = 0;

        for (; ;) {
          let remline = leRegex.exec(value);
          //only progress if there are more lines
          if (!remline) {
            if (done) break;
            //loop through each successive line
            let remainder = value.substr(startIndex);
            ({ value, done } = await reader.read());
            //add more if available
            value = remainder + (value ? utf8Decoder.decode(value) : "");
            startIndex = leRegex.lastIndex = 0;
          } else {
            yield value.substring(startIndex, remline.index);
          }
          startIndex = leRegex.lastIndex;
        }

        if (startIndex < value.length) {
          yield value.substr(startIndex);
        }
      }
      for await (let line of rr(this.reader)) {
        this.processLine(line);
      }
      return new Date();
    };
  }
}

class tle extends lineReader {
  constructor(reader) {
    super(reader);
    this.lines = [];
    this._line = [];
    this.processLine = (line) => {
      this._line.push(line);
      let l0 = this._line[0].length;
      let l1 = this._line.length;
      if ((l0 === 24 && l1 === 3) || (l0 >= 68 && l1 === 2)) {
        this.processTLE(this._line);
        this._line = [];
      }
    };
    this.processTLE = (tle) => {
      
      //this.lines.push(parsedTLE);
    }
  }
}
const satcat = null;
const vcm = null;

export { tle, satcat, vcm };
