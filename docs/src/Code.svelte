<script>
  import { onMount } from "svelte";
  import WasmFs from "./lib/wasmer/wasmfs.esm.js";
  import { editorBuffer } from "./stores/Buffer";

  let fs;
  let result;
  globalThis.createCode = async flatc => {
    fs = fs || new WasmFs();
    let _fileName = `/${new Date()}.fbs`;
    fs.writeFileSync(_filename, $editorBuffer);
    await fb.runCommand(["./flatc", "--cpp", "-o", "/", _filename]);
    window.errPipe = fs.createReadStream("/dev/stderr");
    window.outPipe = fs.createReadStream("/dev/stdout");
    window.errPipe.on("data", data => {
      console.log(data.toString("utf8"));
    });
    window.outPipe.on("data", data => {
      console.log(data.toString("utf8"));
    });

    result = fs.readFileSync(`${_fileName.split(".")[0]}_generated.h`, {
      encoding: "utf8"
    });
  };
  onMount(() => {});
</script>

<svelte:head>
  <script type="module">
    import { flatc } from "https://digitalarsenal.io/lib/flatbuffers.js";
    createCode(flatc);
  </script>
</svelte:head>
<container>
  <h1>{result}</h1>
</container>
