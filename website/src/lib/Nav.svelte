<script lang="ts">
  import { link } from "svelte-spa-router";
  import type { Readable } from "svelte/store";

  export let currentPath: Readable<string>;

  let mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  function isActive(path: string, current: string): boolean {
    if (path === "/") return current === "/";
    return current.startsWith(path);
  }
</script>

<nav>
  <div class="nav-content">
    <div class="nav-left">
      <a href="/" use:link class="logo" on:click={closeMobileMenu}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="4" fill="none"/>
          <ellipse cx="50" cy="50" rx="45" ry="18" stroke="currentColor" stroke-width="2" fill="none"/>
          <ellipse cx="50" cy="50" rx="45" ry="18" stroke="currentColor" stroke-width="2" fill="none" transform="rotate(60 50 50)"/>
          <ellipse cx="50" cy="50" rx="45" ry="18" stroke="currentColor" stroke-width="2" fill="none" transform="rotate(120 50 50)"/>
          <circle cx="50" cy="50" r="8" fill="currentColor"/>
        </svg>
        <span class="logo-text">Space Data Standards</span>
      </a>
    </div>

    <div class="nav-links">
      <a href="/" use:link class:active={isActive("/", $currentPath)} on:click={closeMobileMenu}>Home</a>
      <a href="/schemas" use:link class:active={isActive("/schemas", $currentPath)} on:click={closeMobileMenu}>Schemas</a>
      <a href="/docs" use:link class:active={isActive("/docs", $currentPath)} on:click={closeMobileMenu}>Docs</a>
      <a href="/playground" use:link class:active={isActive("/playground", $currentPath)} on:click={closeMobileMenu}>Playground</a>
      <a href="/download" use:link class:active={isActive("/download", $currentPath)} on:click={closeMobileMenu}>Download</a>
    </div>

    <div class="nav-right">
      <a href="https://github.com/DigitalArsenal/spacedatastandards.org" target="_blank" class="nav-cta">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
      <button class="nav-menu-btn" on:click={toggleMobileMenu} aria-label="Toggle menu">
        {#if mobileMenuOpen}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        {:else}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        {/if}
      </button>
    </div>
  </div>
</nav>

<div class="mobile-menu" class:open={mobileMenuOpen}>
  <a href="/" use:link on:click={closeMobileMenu}>Home</a>
  <a href="/schemas" use:link on:click={closeMobileMenu}>Schemas</a>
  <a href="/docs" use:link on:click={closeMobileMenu}>Docs</a>
  <a href="/playground" use:link on:click={closeMobileMenu}>Playground</a>
  <a href="/download" use:link on:click={closeMobileMenu}>Download</a>
  <a href="https://github.com/DigitalArsenal/spacedatastandards.org" target="_blank" on:click={closeMobileMenu}>GitHub</a>
</div>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 52px;
    z-index: 9999;
    background: var(--nav-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 15px;
    color: var(--text-primary);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .logo svg {
    width: 26px;
    height: 26px;
    flex-shrink: 0;
  }

  .nav-links {
    display: flex;
    gap: 28px;
    flex-shrink: 1;
    overflow: hidden;
  }

  .nav-links a {
    color: var(--text-secondary);
    font-size: 14px;
    font-weight: 500;
    transition: color 0.2s;
    white-space: nowrap;
  }

  .nav-links a:hover,
  .nav-links a.active {
    color: var(--text-primary);
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }

  .nav-cta {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: var(--ui-bg);
    border: 1px solid var(--ui-border);
    border-radius: 28px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    backdrop-filter: blur(10px);
    transition: all 0.2s;
  }

  .nav-cta:hover {
    background: var(--ui-hover);
    border-color: var(--ui-border-hover);
  }

  .nav-menu-btn {
    display: none;
    background: none;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
    padding: 8px;
  }

  .mobile-menu {
    display: none;
    position: fixed;
    top: 52px;
    left: 0;
    right: 0;
    background: var(--nav-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 16px 24px;
    z-index: 9998;
    flex-direction: column;
    gap: 12px;
  }

  .mobile-menu.open {
    display: flex;
  }

  .mobile-menu a {
    color: var(--text-secondary);
    font-size: 16px;
    font-weight: 500;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .mobile-menu a:last-child {
    border-bottom: none;
  }

  .mobile-menu a:hover {
    color: var(--text-primary);
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }

    .nav-menu-btn {
      display: block;
    }

    .logo-text {
      display: none;
    }
  }
</style>
