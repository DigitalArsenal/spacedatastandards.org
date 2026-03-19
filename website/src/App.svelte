<script lang="ts">
  import Router, { location, push } from "svelte-spa-router";
  import { derived } from "svelte/store";
  import { onMount } from "svelte";
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

  let appVersion = '';

  const currentPath = derived(location, ($location) => {
    return $location;
  });

  const isDocsRoute = derived(currentPath, ($currentPath) => {
    return $currentPath.startsWith("/docs");
  });

  onMount(async () => {
    try {
      const res = await fetch('/dist/manifest.json');
      const manifest = await res.json();
      appVersion = manifest.version || '';
    } catch {}
  });
</script>

<div class="starfield"></div>
<Nav {currentPath} />
<main>
  <Router {routes} />
</main>
<Footer hideOnMobile={$isDocsRoute} />
{#if appVersion}
  <div class="version-badge">{appVersion}</div>
{/if}

<style>
  .version-badge {
    position: fixed;
    bottom: 6px;
    right: 8px;
    font-size: 10px;
    font-family: var(--font-mono);
    color: rgba(255, 255, 255, 0.25);
    pointer-events: none;
    z-index: 9999;
    user-select: text;
  }
</style>
