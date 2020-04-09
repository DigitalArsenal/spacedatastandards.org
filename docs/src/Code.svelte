<script>
  import { onMount } from "svelte";
  import WasmFs from "./lib/wasmer/wasmfs.esm.js";
  import { editorBuffer } from "./stores/Buffer";
  import { currentDocument } from "./stores/Route";

  let fs = new WasmFs().fs;
  let result;
  $: {
    if ($editorBuffer.length) {
      globalThis.createCode();
    }
  }
  globalThis.createCode = async () => {
    if (!$editorBuffer.length || !globalThis.flatc) return;
    let fb = new globalThis.flatc({
      fs: fs,
      rootDir: "/"
    });
    fs.mkdirpSync("/test");
    fs.writeFileSync(`/test/${$currentDocument}.fbs`, $editorBuffer);
    await fb.runCommand([
      "./flatc",
      "--cpp",
      "-o",
      "/test",
      `/test/${$currentDocument}.fbs`
    ]);
    window.errPipe = fs.createReadStream("/dev/stderr");
    window.outPipe = fs.createReadStream("/dev/stdout");
    window.errPipe.on("data", data => {
      console.log(data.toString("utf8"));
    });
    window.outPipe.on("data", data => {
      console.log(data.toString("utf8"));
    });
    result = fs.readFileSync(`/test/${$currentDocument}_generated.h`, {
      encoding: "utf8"
    });
    //.replace(/\n/g, "<br/>");
  };
  onMount(() => {});
</script>

<style>
  textarea {
    width: 100%;
    height: calc(100vh - var(--header-height));
  }
</style>

<svelte:head>
  <script type="module">
    import { flatc } from "https://digitalarsenal.io/lib/flatbuffers.js";
    globalThis.flatc = flatc;
    createCode();
  </script>
</svelte:head>
<textarea value={result} />
