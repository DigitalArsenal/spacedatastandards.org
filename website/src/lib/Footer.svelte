<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<footer>
  <div class="footer-content">
    <div class="footer-logo">
      <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="4" fill="none"/>
        <ellipse cx="50" cy="50" rx="45" ry="18" stroke="currentColor" stroke-width="2" fill="none"/>
        <ellipse cx="50" cy="50" rx="45" ry="18" stroke="currentColor" stroke-width="2" fill="none" transform="rotate(60 50 50)"/>
        <ellipse cx="50" cy="50" rx="45" ry="18" stroke="currentColor" stroke-width="2" fill="none" transform="rotate(120 50 50)"/>
        <circle cx="50" cy="50" r="8" fill="currentColor"/>
      </svg>
      <span>Space Data Standards</span>
    </div>
    <div class="footer-links">
      <a href="/schemas" use:link>Schemas</a>
      <a href="/docs" use:link>Documentation</a>
      <a href="/converter" use:link>Converter</a>
      <a href="/download" use:link>Download</a>
      <a href="https://github.com/DigitalArsenal/spacedatastandards.org" target="_blank">GitHub</a>
      <a href="https://spacedatanetwork.org" target="_blank">Space Data Network</a>
    </div>
  </div>
</footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px 24px;
    border-top: 1px solid var(--ui-border);
    background: var(--nav-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 9999;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .footer-links {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }

  .footer-links a {
    color: var(--text-secondary);
    font-size: 14px;
    transition: color 0.2s;
  }

  .footer-links a:hover {
    color: var(--text-primary);
  }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      text-align: center;
    }

    .footer-links {
      justify-content: center;
    }
  }
</style>
