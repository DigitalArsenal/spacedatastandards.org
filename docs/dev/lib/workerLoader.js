import { mobilecheck } from "./DetectMobile.js";

const wMax = navigator.hardwareConcurrency;
const workers = new Array(wMax);
const activeWorkers = [];

export default (workerPath, inputObject, callback) => {
  let nW = () => new Worker(workerPath, { type: "module" });
  if (mobilecheck()) {
    import(workerPath).then((m) => {
      m.convert({ data: inputObject })
        .then(callback)
        .catch((e) => {
          result = e;
        });
    });
  } else {
    let wIndex = Math.min(activeWorkers.length, wMax - 1);
    activeWorkers[wIndex] = workers[wIndex] = workers[wIndex] || nW();
    activeWorkers[wIndex].postMessage(inputObject);
    activeWorkers[wIndex].onmessage = (a) => {
      callback(a.data);
      activeWorkers.splice(activeWorkers.indexOf(activeWorkers[wIndex]));
    };
  }
};
