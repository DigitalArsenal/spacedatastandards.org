//TEST
let assert = {};

assert.equal = (val1, val2) => {
  if(val1!==val2) throw Error(`${val1} is Not Equal To ${val2}`);
  else console.log('assert passed: ', val1,' === ', val2);
}

let SAT_TEST_OBJ = {
  CCSDS_OMM_VERS : 2.0,
  CREATION_DATE : "2007-03-05T16:00:00",
  ORIGINATOR : "NOAA/USA",
  OBJECT_NAME : "GOES 9",
  OBJECT_ID : "1995-025A",
  CENTER_NAME : "EARTH",
  REF_FRAME : "TEME",
  TIME_SYSTEM : "UTC",
  MEAN_ELEMENT_THEORY: "SGP/SGP4",
  EPOCH: "2007-03-05T10:34:41.4264",
  MEAN_MOTION: 1.00273272,
  ECCENTRICITY: 0.0005013,
  INCLINATION: 3.0539,
  RA_OF_ASC_NODE: 81.7939,
  ARG_OF_PERICENTER: 249.2363,
  MEAN_ANOMALY: 150.1602,
  GM: 398600.8,
  EPHEMERIS_TYPE: "0",
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
  
  shim.forEach(canonicalname =>{
    let mangledname = canonicalname.replace(/_/g, "").toUpperCase();
    for(let prop in OMM){
      console.log(prop)
    }
  });

  

  OMM.startOMM(builder);
  
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

  assert.equal(GOES9.OBJECTNAME(), 'GOES 9');

  //for(let x in iss)console.log(x);
  Object.defineProperty(GOES9, 'OBJECT_NAME', {get:GOES9.OBJECTNAME});
  console.log(GOES9.OBJECT_NAME);
  console.log('The FlatBuffer was successfully created and verified!');
}

main();