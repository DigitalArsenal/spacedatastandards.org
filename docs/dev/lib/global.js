let _onload = [];
const onLoad = (f) => _onload.indexOf(f) === -1 ? _onload.push(f) : null
globalThis.onload = (...args) => {
    _onload.map(f => f.apply(globalThis, args));
}

export { onLoad };