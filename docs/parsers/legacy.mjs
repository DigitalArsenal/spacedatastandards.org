//https://celestrak.com/NORAD/documentation/spacetrk.pdf
//https://cdf.gsfc.nasa.gov/html/leapseconds_requirements.html

import bignumber from "bignumber.js";
import { satcat_map, satcat_transform, tle_map, tle_transform } from './parser_defs.mjs';
window.bignumber = bignumber;


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
      }
    };
  }
}

const satcat = class tle extends lineReader {
  constructor(reader) {
    super(reader);
    this.lines = [];
    this.processLine = (line) => {
      this.lines.push(line);
    };

    this.format = {
      RAW: (satcat) => satcat,
      CAT: (satcat) => {
        if (!satcat) return;
        let _satcat = {};
        for (let prop in satcat_map) {
          let sp = satcat_map[prop];
          let value = satcat.substring(sp[0], sp[1]);
          _satcat[prop] = satcat_transform[prop] ? satcat_transform[prop](value, _satcat) : bignumber(value);

        }
        return _satcat;
      }
    }
  }
};
const vcm = null;

export { tle, satcat, vcm };
