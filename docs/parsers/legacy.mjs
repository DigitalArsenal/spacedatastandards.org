//https://celestrak.com/NORAD/documentation/spacetrk.pdf
//https://cdf.gsfc.nasa.gov/html/leapseconds_requirements.html

import bignumber from "bignumber.js";
window.bignumber = bignumber;
const tle_map = {
  1: {
    NORAD_CAT_ID: [3, 7],
    CLASSIFICATION_TYPE: [8],
    OBJECT_ID: [10, 17],
    EPOCH: [19, 32],
    MEAN_MOTION_DOT: [34, 43],
    MEAN_MOTION_DDOT: [45, 52],
    BSTAR: [54, 61],
    EPHEMERIS_TYPE: [63],
    ELEMENT_SET_NO: [65, 68],
    CHECKSUM: [69],
  },
  2: {
    NORAD_CAT_ID: [3, 7],
    INCLINATION: [9, 16],
    RA_OF_ASC_NODE: [18, 25],
    ECCENTRICITY: [27, 33],
    ARG_OF_PERICENTER: [35, 42],
    MEAN_ANOMALY: [44, 51],
    MEAN_MOTION: [53, 63],
    REV_AT_EPOCH: [64, 68],
    CHECKSUM: [69],
  },
};
const decimalAssumed = (value) => bignumber("." + value) || 0;
const tle_transform = {
  BSTAR: (value) => {
    let sign = value.slice(0, 1) === "-" ? -1 : 1;
    let num = value.slice(1, 6);
    let exp = value.slice(6);
    let fpf = 1e32;
    let r = sign * parseInt(num) * Math.pow(10, parseInt(exp));
    return (r * fpf) / (fpf * parseInt("10" + new Array(num.length).join("0")));
  },
  CLASSIFICATION_TYPE: (value) => value,
  OBJECT_ID: (value) => {
    let year = whatCentury(parseInt(value.slice(0, 2)));

    return !year ? "" : `${year}-${value.slice(2)}`.trim();
  },
  ECCENTRICITY: decimalAssumed,
  MEAN_MOTION_DDOT: (value) => {
    let sign = value.slice(0, 1) === "-" ? -1 : 1;
    return sign * decimalAssumed(value.slice(1));
  },
  EPOCH: (value) => {
    value = value.trim();
    let tA = [whatCentury(value.slice(0, 2)), 0, parseFloat(value.substr(2)), 0, 24, 0, 60, 0, 60, 0, 1000];
    tA.forEach((v, i) => {
      if (i % 2 && i !== 1) {
        tA[i] = Math.floor(tA[i - 1]);
      } else if (i > 2) {
        tA[i] = tA[i] * (tA[i - 2] - tA[i - 1]);
      }
    });
    return new Date(
      Date.UTC.apply(
        0,
        tA.filter((v, i) => {
          return i % 2 || i == 0 || i == tA.length - 1;
        })
      )
    );
  },
};

const whatCentury = (digits) => {
  digits = parseInt(digits);
  return digits ? (digits < 50 ? "20" : "19") + digits.toString().padStart(2,0) : null;
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

        for (;;) {
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
      this.lines.push(tle);
    };
    this.format = {
      RAW: (tle) => tle,
      OMM: (tle) => {
        if (!tle) return;
        let OBJECT_NAME;
        let _OMM = {};
        if (tle.length === 3) {
          OBJECT_NAME = tle[0].trim();
          tle = tle.slice(1, 3);
        }
        tle.forEach((_line, i) => {
          let tt = tle_map[i + 1];
          for (let prop in tt) {
            let tp = tt[prop];
            let _tp = [];
            _tp = tp.length === 2 ? [tp[0] - 1, tp[1]] : [tp[0] - 1, tp[0]];
            let value = _line.substring(_tp[0], _tp[1]);
            _OMM[prop] = (tle_transform[prop] || bignumber)(value);
          }
        });
        if (OBJECT_NAME) _OMM.OBJECT_NAME = OBJECT_NAME;
        return _OMM;
      },
    };
  }
}
const satcat = null;
const vcm = null;

export { tle, satcat, vcm };
