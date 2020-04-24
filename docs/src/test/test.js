//TEST
let assert = {};

assert.equal = (label, val1, val2) => {
  let sep = '\n----------------------------\n';
  let sep2 = '\n============================\n';

  if (val1 !== val2) console.log(`${sep2}${label}${sep} assert failed: ${sep}`, `${val1} is Not Equal To ${val2}`);
  //else console.log(`${sep2}${label}${sep} assert passed: ${sep}`, val1,' === ', val2);
}

let SAT_TEST_OBJ = {
  CCSDS_OMM_VERS: 2.0,
  CREATION_DATE: "2007-03-05T16:00:00",
  ORIGINATOR: "NOAA/USA",
  OBJECT_NAME: "GOES 9",
  OBJECT_ID: "1995-025A",
  CENTER_NAME: "EARTH",
  REF_FRAME: referenceFrame.TEME,
  TIME_SYSTEM: timeSystem.UTC,
  MEAN_ELEMENT_THEORY: meanElementTheory.SGP4,
  EPOCH: "2007-03-05T10:34:41.4264",
  MEAN_MOTION: 1.00273272,
  ECCENTRICITY: 0.0005013,
  INCLINATION: 3.0539,
  RA_OF_ASC_NODE: 81.7939,
  ARG_OF_PERICENTER: 249.2363,
  MEAN_ANOMALY: 150.1602,
  GM: 398600.8,
  EPHEMERIS_TYPE: ephemerisType.SGP4,
  CLASSIFICATION_TYPE: "U",
  NORAD_CAT_ID: 23581,
  ELEMENT_SET_NO: 0925,
  REV_AT_EPOCH: 4316,
  BSTAR: 0.0001,
  MEAN_MOTION_DOT: -0.00000113,
  MEAN_MOTION_DDOT: 0.0,
  USER_DEFINED_EARTH_MODEL: "WGS-84"
};

// Example how to use FlatBuffers to create and read binary buffers.
function main() {
  var builder = new flatbuffers.Builder(0);
  let shim = Object.keys(OMM.schema.definitions.OMM.properties);
  let intermediate = {};
  shim.forEach(canonicalname => {
    let mangledname = canonicalname.replace(/_/g, "").toUpperCase();
    for (let prop in OMM) {
      if (prop.indexOf(mangledname) > -1) {
        if (SAT_TEST_OBJ[canonicalname] || SAT_TEST_OBJ[canonicalname] === 0) {
          let schemaValue = OMM.schema.definitions.OMM.properties[canonicalname];
          //console.log(schemaValue.type)
          intermediate[prop] = { canonicalname, mangledname };
          let _value = SAT_TEST_OBJ[canonicalname];
          switch (schemaValue.type) {
            case "number":

              break;
            case "string":
              _value = builder.createString(_value);
              break;

          };
          intermediate[prop].value = _value;

        }
      }
    }
  });

  OMM.startOMM(builder);

  for (prop in intermediate) {
    OMM[prop](builder, intermediate[prop].value);
  }

  var GOESBuiltOMM = OMM.endOMM(builder);

  builder.finish(GOESBuiltOMM);

  //console.log(testObject,"\n", btoa(JSON.stringify(testObject)));
  var buf = builder.dataBuffer();
  let uint8 = builder.asUint8Array();
  var decoder = new TextDecoder('utf8');
  var b64encoded = btoa(unescape(encodeURIComponent(decoder.decode(uint8))));
  //console.log(b64encoded);
  // Get access to the root:
  var GOES9 = OMM.getRootAsOMM(buf);

  for (let prop in intermediate) {
    let { canonicalname, mangledname } = intermediate[prop];

    if (typeof GOES9[mangledname] === "function")
      Object.defineProperty(GOES9, canonicalname, { get: GOES9[mangledname] });
  }

  for (let prop in SAT_TEST_OBJ) {
    assert.equal(prop, SAT_TEST_OBJ[prop], GOES9[prop]);
  }
  console.log(timeSystem);
  console.log('The FlatBuffer was successfully created and verified!');
}

main();