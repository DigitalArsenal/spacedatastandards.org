<script>
  import { onMount } from "svelte";
  import { fs } from "./stores/FileSystem";
  import { currentDocument } from "./stores/Route";

  let result;

  let languages = [
    ["--cpp", "Generate a C++ header", "h"],
    ["--java", "Generate Java code", "java"],
    ["--kotlin", "Generate Kotlin code", "kt"],
    ["--csharp", "Generate C# code", "cs"],
    ["--go", "Generate Go code", "go"],
    ["--python", "Generate Python code", "py"],
    ["--js", "Generate JavaScript code", "js"],
    ["--ts", "Generate TypeScript code", "ts"],
    [
      "--php",
      " Generate PHP code",
      "php"
    ] /*,
    ["--grpc", " Generate RPC stub code for GRPC", ''],
    ["--dart", " Generate Dart code"],
    ["--lua", " Generate Lua code"],
    ["--lobster", " Generate Lobster code"],
    ["--rust, -r ", " Generate Rust code"],
    ["--swift", " Generate Swift code"]*/
  ];
  let currentLanguage = languages[0];
  let createCode = async () => {
    if (!globalThis.flatc) return;
    let fb = new globalThis.flatc({
      fs: fs,
      rootDir: "/"
    });
    await fb.runCommand([
      "./flatc",
      currentLanguage[0],
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
    globalThis.fs = fs;
    let _resultFile;
    fs.readdirSync("/test/").forEach(f => {
      if (f.slice(f.lastIndexOf(".") + 1) === currentLanguage[2]) {
        _resultFile = f;
      }
    });
    result = fs.readFileSync(`/test/${_resultFile}`, {
      encoding: "utf8"
    });
  };
  globalThis.createCode = createCode;
  onMount(() => {
    createCode();
  });
</script>

<style>
  textarea {
    width: 100%;
    height: calc(100vh - var(--header-height) - 25px);
  }
</style>

<svelte:head>
  <script type="module">
    import { flatc } from "https://digitalarsenal.io/lib/flatbuffers.js";
    globalThis.flatc = flatc;
    createCode();
  </script>
</svelte:head>
<select bind:value={currentLanguage} on:change={() => createCode()}>
  {#each languages as language}
    <option value={language}>{language[1]}</option>
  {/each}
</select>
<textarea value={result} />
