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
  import Converter from "./lib/Converter.svelte";
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
    "/converter": Converter,
  };

  const currentPath = derived(location, ($location) => {
    return $location;
  });

  const isDocsRoute = derived(currentPath, ($currentPath) => {
    return $currentPath.startsWith("/docs");
  });
</script>

<div class="starfield"></div>
<Nav {currentPath} />
<main>
  <Router {routes} />
</main>
<Footer hideOnMobile={$isDocsRoute} />
