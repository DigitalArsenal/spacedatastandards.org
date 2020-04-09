<script>
  import { onMount } from "svelte";
  import { fs } from "./stores/FileSystem";
  import { currentDocument } from "./stores/Route";
 
  let result;

  globalThis.createCode = async () => {
    if (!globalThis.flatc) return;
    let fb = new globalThis.flatc({
      fs: fs,
      rootDir: "/"
    });
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
  onMount(() => {
    createCode();
  });
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
