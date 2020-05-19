import { JulianDate, TimeStandard } from "./JulianDate";

import bignumber from "bignumber.js";

const decimalAssumed = (value) => {
  let n = bignumber("." + value);
  return n.isFinite() && !n.isNaN() ? n : 0;
};
const dpAParse = (value) => {
  let result = (value.slice(0, 1) === "-" ? -1 : 1) * decimalAssumed(`${value.slice(1, 6)}e${value.slice(6)}`);
  return result;
};
const whatCentury = (digits) => {
  digits = parseInt(digits);
  return digits || digits === 0 ? (digits < 50 ? "20" : "19") + digits.toString().padStart(2, 0) : null;
};

const satcat_map = {
  OBJECT_ID: [0, 11],
  NORAD_CAT_ID: [13, 18],
  MULTIPLE_NAMES: [19, 20],
  PAYLOAD: [20, 21],
  OPS_STATUS_CODE: [21, 22],
  OBJECT_NAME: [23, 47],
  ORIGINATOR: [49, 54],
  LAUNCH_DATE: [56, 66],
  LAUNCH_SITE: [68, 73],
  DECAY_DATE: [75, 85],
  PERIOD: [87, 94],
  INCLINATION: [96, 101],
  APOGEE: [103, 109],
  PERIGEE: [111, 117],
  RCS: [119, 127],
  ORBITAL_STATUS_CODE: [129, 132],
  ORBIT_CENTER: [0, 0],
  ORBIT_TYPE: [0, 0],
  TYPE: [21, 22],
};

const satcat_transform = {
  TYPE: (d, _satcat) => {
    let _payload = _satcat.PAYLOAD;
    let _name = _satcat.OBJECT_NAME;
    let _active = [0, 2, 3, 4, 5].indexOf(_satcat.OPS_STATUS_CODE) > -1;
    if (_payload && _active) {
      return 0;
    } else if (_payload && !_active) {
      return 1;
    } else if (!_payload && _name && _name.indexOf(" DEB") > -1) {
      return 2;
    } else if (_name && (_name.indexOf(" R/B") > -1 || _name.indexOf(" AKM") > -1)) {
      return 3;
    }
    return 4;
  },
  MULTIPLE_NAMES: (d) => d.trim() === "M",
  PAYLOAD: (d) => d.trim() === "*",
  LAUNCH_SITE: (d) => d.trim(),
  ORIGINATOR: (d) => d.trim(),
  OBJECT_NAME: (d) => d.trim(),
  OBJECT_ID: (d) => d.trim(),
  OPS_STATUS_CODE: (d) => {
    d = d.trim();
    d = ["+", "P", "B", "S", "X", "D", "?"].indexOf(d);
    return d > -1 ? d : null;
  },
  LAUNCH_DATE: (d) => new Date(d),
  DECAY_DATE: (d) => new Date(d),
  ORBITAL_STATUS_CODE: (d, _satcat) => {
    d = d.trim();
    let _d = ["NCE", "NIE", "NEA", "DOC", "ISS"].indexOf(d);
    _satcat.ORBIT_CENTER = 1;
    _satcat.ORBIT_TYPE = null;
    if (_d === -1) {
      _d = null;
      let _dd = ["AS", "EA", "EL", "EM", "JU", "MA", "ME", "MO", "NE", "PL", "SA", "SS", "SU", "UR", "VE"].indexOf(d.slice(0, 2));
      if (_dd > -1) {
        _satcat.ORBIT_CENTER = _d;
        let _n = parseInt(d.slice(2));
        _satcat.ORBIT_TYPE = _n >= 0 ? _n : null;
      }
    }
    if (_satcat.ORBIT_TYPE === null) {
      let _decayed = _satcat.OPS_STATUS_CODE === 6 || !isNaN(_satcat.DECAY_DATE.getTime());
      if (_decayed) {
        _satcat.ORBIT_TYPE = 2;
      } else {
        _satcat.ORBIT_TYPE = [0, 2, 3, 4, 5].indexOf(_satcat.OPS_STATUS_CODE) > -1 ? 0 : null;
      }
    }
    return _d;
  },

  RCS: (d) => (parseFloat(d) ? bignumber(d) : null),
};

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

const tle_transform = {
  BSTAR: dpAParse,
  CLASSIFICATION_TYPE: (value) => value,
  OBJECT_ID: (value) => {
    let year = whatCentury(parseInt(value.slice(0, 2)));
    return `${year ? year : "0000"}-${value.slice(2)}`.trim();
  },
  ECCENTRICITY: decimalAssumed,
  MEAN_MOTION_DDOT: dpAParse,
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
    tA = tA.filter((v, i) => {
      return i % 2 || i == 0 || i == tA.length - 1;
    });

    let _epoch = new Date(Date.UTC.apply(0, tA));
    /*
    let jdate = new JulianDate();
    JulianDate.fromDate(_epoch, jdate); //converts to TAI https://github.com/CesiumGS/cesium/blob/1.69/Source/Core/JulianDate.js#L299
    console.log(Juliandate.totalDays(jdate));
    */
    _epoch.microseconds = parseInt(tA[tA.length - 1] * 1000);
    return _epoch;
  },
  
};

export { satcat_map, satcat_transform, tle_map, tle_transform };
