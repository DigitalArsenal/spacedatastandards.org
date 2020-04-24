let _done = () => { globalThis.postMessage('done'); };
console.log = function (...args) {
  args.map((msg, m) => {
    if (typeof msg === "object") {
      args[m] = (JSON && JSON.stringify ? JSON.stringify(msg) : msg);
    } else if (typeof msg === "function") {
      args[m] = (msg.toString());
    }
  });
  globalThis.postMessage(args);
};