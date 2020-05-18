var deferredPrompt;
window.addEventListener("beforeinstallprompt", function (e) {
  // Prevent Chrome 67 and earlier from automatically showing the prompt e.preventDefault(); // Stash the event so it can be triggered later.
  deferredPrompt = e;
  console.log('test')
  var a2hsBtn = document.querySelector(".ad2hs-prompt");
  a2hsBtn.style.display = "block";
  a2hsBtn.addEventListener("click", addToHomeScreen);
});

import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {},
});

export default app;
