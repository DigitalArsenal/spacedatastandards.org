<script>
  import { onMount } from "svelte";
  import WasmFs from "./lib/wasmer/wasmfs.esm.js";
  let fs;

  globalThis.createCode = async flatc => {
    fs = fs || new WasmFs();

    fs.writeFileSync("/", );
    await fb.runCommand([
      "./flatc",
      "--cpp",
      "-o",
      "/",
      "/"
    ]);
    window.errPipe = fs.createReadStream("/dev/stderr");
    window.outPipe = fs.createReadStream("/dev/stdout");
    window.errPipe.on("data", data => {
      console.log(data.toString("utf8"));
    });
    window.outPipe.on("data", data => {
      console.log(data.toString("utf8"));
    });

    document.write(
      fs
        .readFileSync("/test/monster_generated.h", { encoding: "utf8" })
        .replace(/\n/g, "<br/>")
    );
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
  <h1>Code</h1>
</container>
