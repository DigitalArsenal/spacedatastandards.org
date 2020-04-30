import bignumber from "bignumber.js";

const decimalAssumed = (value) => bignumber("." + value) || 0;

const whatCentury = (digits) => {
  digits = parseInt(digits);
  return digits || digits === 0 ? (digits < 50 ? "20" : "19") + digits.toString().padStart(2, 0) : null;
}

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
  ORBIT_CENTER: [129, 132],
  ORBIT_TYPE: [129, 132],
  TYPE: [21, 22]
};

const satcat_transform = {
  TYPE: (d, _satcat) => {
    let _payload = _satcat.PAYLOAD;
    let _name = _satcat.OBJECT_NAME;
    let _active = _satcat.OPS_STATUS_CODE &&
      _satcat.OPS_STATUS_CODE < 5;
    if (_payload && _active) {
      return 0;
    } else if (_payload && !_active) {
      return 1;
    } else if (
      !_payload &&
      _name &&
      _name.indexOf(" DEB") > -1
    ) {
      return 2;
    } else if (
      _name &&
      (_name.indexOf(" R/B") > -1 ||
        _name.indexOf(" AKM") > -1)
    ) {
      return 3;
    }
    return 4;
  },
  MULTIPLE_NAMES: d => d.trim() === "M",
  PAYLOAD: d => d.trim() === "*",
  LAUNCH_SITE: d => d.trim(),
  ORIGINATOR: d => d.trim(),
  OBJECT_NAME: d => d.trim(),
  OBJECT_ID: d => d.trim(),
  OPS_STATUS_CODE: d => {
    d = d.trim();
    let r = ["+", "P", "B", "S", "X", "D", "?"].indexOf(d);
    return r > -1 ? r : null;
  },
  LAUNCH_DATE: d => new Date(d),
  DECAY_DATE: d => new Date(d),
  ORBITAL_STATUS_CODE: d => d.trim(),
  ORBIT_CENTER: d => d.trim(),
  ORBIT_TYPE: d => d.trim(),
  RCS: d => parseFloat(d) ? bignumber(d) : null
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

    return `${year ? year : "0000"}-${value.slice(2)}`.trim();
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


export { satcat_map, satcat_transform, tle_map, tle_transform }