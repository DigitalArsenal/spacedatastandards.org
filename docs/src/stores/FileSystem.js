import { writable } from "svelte/store";
import WasmFs from "../lib/wasmer/wasmfs.esm.js";
import OMM_Text from './OMM.fbs';

let fs = new WasmFs().fs;
fs.mkdirpSync("/test");
export const init = currentDocument => {
  fs.writeFileSync(`/test/${currentDocument}.fbs`, OMM_Text);
};

export { fs };
