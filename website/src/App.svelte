<script lang="ts">
  import Router, { location, push } from "svelte-spa-router";
  import { derived } from "svelte/store";
  import "./app.css";
  import Landing from "./lib/Landing.svelte";
  import Schemas from "./lib/Schemas.svelte";
  import SchemaDetail from "./lib/SchemaDetail.svelte";
  import Docs from "./lib/Docs.svelte";
  import Download from "./lib/Download.svelte";
  import Playground from "./lib/Playground.svelte";
  import CodePlayground from "./lib/CodePlayground.svelte";
  import Nav from "./lib/Nav.svelte";
  import Footer from "./lib/Footer.svelte";

  let routes: any = {
    "/": Landing,
    "/schemas": Schemas,
    "/schemas/:name": SchemaDetail,
    "/docs": Docs,
    "/docs/*": Docs,
    "/download": Download,
    "/playground": Playground,
    "/code": CodePlayground,
  };

  const currentPath = derived(location, ($location) => {
    return $location;
  });
</script>

<div class="starfield"></div>
<Nav {currentPath} />
<main>
  <Router {routes} />
</main>
<Footer />
