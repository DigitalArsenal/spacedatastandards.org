import { mobilecheck } from "./DetectMobile.js";
const nhC = navigator.hardwareConcurrency;
const wMax = nhC ? nhC - 1 : 2;
const workers = new Array(wMax);
const activeWorkers = [];

export default (workerPath, inputObject, callback) => {

  if (mobilecheck()) { //cannot load external worker
    import(workerPath).then((m) => {
      m.convert({ data: inputObject })
        .then(callback)
        .catch((e) => {
          result = e;
        });
    });
  } else {
    let nW = () => new Worker(workerPath, { type: "module" });
    let wIndex = Math.min(activeWorkers.length, wMax - 1);
    activeWorkers[wIndex] = workers[wIndex] = workers[wIndex] || nW();
    activeWorkers[wIndex].postMessage(inputObject);
    activeWorkers[wIndex].onmessage = (a) => {
      callback(a.data);
      activeWorkers.splice(activeWorkers.indexOf(activeWorkers[wIndex]));
    };
  }
};
