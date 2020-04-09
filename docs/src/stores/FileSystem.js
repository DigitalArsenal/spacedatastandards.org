import { writable } from "svelte/store";
import WasmFs from "../lib/wasmer/wasmfs.esm.js";

let fs = new WasmFs().fs;
fs.mkdirpSync("/test");
export const init = currentDocument => {
  let OMM_Text = `table OMM {
  CCSDS_OPM_VERS:float;
  COMMENT:string;
  CREATION_DATE:string;
  ORIGINATOR:string;
  OBJECT_NAME:string;
  OBJECT_ID:string;
  REF_FRAME:string;
  REF_FRAME_EPOCH:string;
  TIME_SYSTEM:string;
  MEAN_ELEMENT_THEORY:string;
  EPOCH:ulong;
  SEMI_MAJOR_AXIS:float;
  MEAN_MOTION:float;
  ECCENTRICITY:float;
  INCLINATION :float;
  RA_OF_ASC_NODE:float;
  ARG_OF_PERICENTER:float;
  MEAN_ANOMALY:float;
  GM :float;
  MASS:float;
  SOLAR_RAD_AREA :float;
  SOLAR_RAD_COEFF:float;
  DRAG_AREA:float;
  DRAG_COEFF:float;
  EPHEMERIS_TYPE:string;
  CLASSIFICATION_TYPE:string;
  NORAD_CAT_ID:uint;
  ELEMENT_SET_NO:ulong;
  REV_AT_EPOCH:float;
  BSTAR:float;
  MEAN_MOTION_DOT:float;
  MEAN_MOTION_DDOT:float;
}

root_type OMM;`;
  fs.writeFileSync(`/test/${currentDocument}.fbs`, OMM_Text);
};

export { fs };
