<script lang="ts">
  import Router, { link, location, push } from "svelte-spa-router";
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

  onMount(async () => {
    try {
      const res = await fetch('/dist/manifest.json');
      const manifest = await res.json();
      appVersion = manifest.version || '';
    } catch {}
  });
</script>

<div class="site-grid-background" aria-hidden="true"></div>
<Nav {currentPath} />
<main>
  <Router {routes} />
  <section id="stack" data-sdn-stack="standards"></section>
  <footer class="sdn-footer">
    <div class="sdn-footer-inner">
      <a class="sdn-footer-brand" href="https://spacedatanetwork.org/">Space Data Network</a>
      <nav class="sdn-footer-links" aria-label="Footer">
        <a href="/schemas" use:link>Schemas</a>
        <a href="/docs" use:link>Docs</a>
        <a href="/converter" use:link>Converter</a>
        <a href="/download" use:link>Download</a>
        <a href="https://github.com/DigitalArsenal/spacedatastandards.org">GitHub</a>
      </nav>
      <p class="sdn-footer-legal">Apache-2.0 License &middot; &copy; Edgesource Corporation &middot; <a href="mailto:tj@edgesource.com">tj@edgesource.com</a></p>
    </div>
  </footer>
</main>
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
