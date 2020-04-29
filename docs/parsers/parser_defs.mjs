const decimalAssumed = (value) => bignumber("." + value) || 0;

const whatCentury = (digits) => {
  digits = parseInt(digits);
  return digits || digits === 0 ? (digits < 50 ? "20" : "19") + digits.toString().padStart(2, 0) : null;
};
export const catalogType = (e, Color) => {
  let _types = [
    "ACTIVE",
    "DEAD",
    "DEBRIS",
    "ROCKET BODY",
    "UNKNOWN"
  ];

  let _satcat = e && e.properties ? e.properties.satcat : {};
  let _payload = e => e && _satcat.payload;
  let _active = e =>
    _satcat.ops_status_code &&
    ["+", "P", "B", "S", "X"].indexOf(_satcat.ops_status_code.toUpperCase()) >
    -1;
  if (_payload(e) && _active(e)) {
    return _types[0];
  } else if (_payload(e) && !_active(e)) {
    return _types[1];
  } else if (
    !_payload(e) &&
    _satcat.satname &&
    _satcat.satname.indexOf(" DEB") > -1
  ) {
    return _types[2];
  } else if (
    _satcat.satname &&
    (_satcat.satname.indexOf(" R/B") > -1 ||
      _satcat.satname.indexOf(" AKM") > -1)
  ) {
    return _types[3];
  }
  return _types[4];
};

const satcat_map = {
  intldes: [0, 11],
  norad_cat_id: [13, 18],
  multipleNames: [19, 20],
  payload: [20, 21],
  ops_status_code: [21, 22],
  satname: [23, 47],
  source: [49, 54],
  launch: [56, 66],
  site: [68, 73],
  decay: [75, 85],
  period: [87, 94],
  inclination: [96, 101],
  apogee: [103, 109],
  perigee: [111, 117],
  rcs: [119, 127],
  orbital_status_code: [129, 132],
  orbital_status_code_text: [129, 132],
  orbit_center: [129, 132],
  orbit_type: [129, 132]
};

const satcat_transform = {
  multipleNames: d => d === "M",
  payload: d => d === "*",
  launch: d => new Date(d),
  decay: d => new Date(d),
  period: d => parseFloat(d),
  inclination: d => parseFloat(d),
  apogee: d => parseFloat(d),
  perigee: d => parseFloat(d),
  rcs: d => parseFloat(d),
  orbital_status_code_text:
    function (d) {
      let _status = {
        NCE: "No Current Elements",
        NIE: "No Initial Elements",
        NEA: "No Elements Available",
        DOC: "Permanently Docked",
        ISS: "Docked to International Space Station"
      };
      return _status[d] || null;
    },
  orbit_center:
    function (d) {
      //https://public.ccsds.org/Pubs/508x0b1e2c1.pdf
      if (d.length && parseInt(d.split("").pop())) {
        let _centers = {
          AS: "Asteroid",
          EA: "Earth (default if blank)",
          EL: "Earth Lagrange",
          EM: "Earth-Moon Barycenter",
          JU: "Jupiter",
          MA: "Mars",
          ME: "Mercury",
          MO: "Moon (Earth)",
          NE: "Neptune",
          PL: "Pluto",
          SA: "Saturn",
          SS: "Solar System Escape",
          SU: "Sun",
          UR: "Uranus",
          VE: "Venus"
        };
        d = _centers[d.slice(0, 2)];
      } else {
        d = "Earth";
      }
      return d;
    },
  orbit_type: d => parseInt(d.split("").pop()) || null
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