<script lang="ts">
  import { link } from "svelte-spa-router";
  import type { Readable } from "svelte/store";

  // The bar is the shared Space Data Network top bar (/assets/sdn-chrome/):
  // its styles, the menu button and the theme switch come from that kit.
  export let currentPath: Readable<string>;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/schemas", label: "Schemas" },
    { href: "/docs", label: "Docs" },
    { href: "/playground", label: "Viz Demo" },
    { href: "/converter", label: "Converter" },
    { href: "/download", label: "Download" },
  ];

  function isActive(path: string, current: string): boolean {
    if (path === "/") return current === "/";
    return current.startsWith(path);
  }

  // The stack section is on every route; scroll to it without touching the
  // route hash.
  function toStack(event: MouseEvent) {
    event.preventDefault();
    document.getElementById("stack")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
</script>

<header class="sdn-header">
  <div class="sdn-header-inner">
    <a class="sdn-header-brand" href="/" use:link><span>Space Data Standards</span></a>
    <nav class="sdn-header-links" aria-label="Site">
      {#each navItems as item}
        <a href={item.href} use:link class:active={isActive(item.href, $currentPath)}>{item.label}</a>
      {/each}
      <a href="#stack" on:click={toStack}>Stack</a>
      <a href="https://github.com/DigitalArsenal/spacedatastandards.org" target="_blank" rel="noopener">GitHub</a>
    </nav>
    <div class="sdn-header-actions">
      <button data-sdn-theme-toggle aria-label="Switch between light and dark theme"></button>
      <button data-sdn-menu-toggle aria-label="Menu"></button>
    </div>
  </div>
</header>
