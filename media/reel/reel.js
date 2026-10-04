// Reel player for every video on the Space Data Network family of sites.
// The canonical copy lives in spacedatanetwork.org docs/media/reel/; the other
// stack sites carry verbatim copies of reel.js and reel.css.
//
// Markup: <div class="reel-stage"><video muted playsinline preload="auto"
// data-poster="poster.webp" aria-label="..."><source ...></video></div>.
// This script adds the controls. Each reel starts when it scrolls into view,
// plays once, then rests on its last card. It never autoplays when reduced
// motion is requested (the poster shows instead), pauses when it leaves the
// screen, goes full screen (the stage on desktop, the native player on
// iPhone), and the progress bar seeks (drag, click, arrow keys). Browsers only
// autoplay muted video, so a reel starts muted; the sound button turns its
// music on, and that choice carries to every reel on the site. The controls
// and Play again stay hidden until someone moves a mouse over the reel, taps
// it or tabs into it.
(function () {
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CHROME =
    '<button class="reel-big-play" type="button" aria-label="Play the video">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>' +
    '</button>' +
    '<button class="reel-again" type="button">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v5h5"/></svg>' +
      'Play again' +
    '</button>' +
    '<div class="reel-bar">' +
      '<div class="reel-progress" role="slider" tabindex="0" aria-label="Seek" aria-valuemin="0" aria-valuemax="0" aria-valuenow="0"><span></span><b class="reel-knob"></b></div>' +
      '<div class="reel-controls">' +
        '<div class="reel-group">' +
        '<button class="reel-btn reel-play" type="button" aria-label="Play the video" aria-pressed="false">' +
          '<svg class="i-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>' +
          '<svg class="i-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor"/></svg>' +
        '</button>' +
        '<button class="reel-btn reel-sound" type="button" aria-label="Turn sound on" aria-pressed="false">' +
          '<svg class="i-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" stroke="none"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>' +
          '<svg class="i-sound" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" stroke="none"/><path d="M15.5 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/></svg>' +
        '</button>' +
        '</div>' +
        '<button class="reel-btn reel-fs" type="button" aria-label="Full screen">' +
          '<svg class="i-enter" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>' +
          '<svg class="i-exit" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>' +
        '</button>' +
      '</div>' +
    '</div>';

  function fullElement() { return document.fullscreenElement || document.webkitFullscreenElement; }
  // The visitor's sound choice, shared by every reel on the site.
  var SOUND_KEY = 'sdn-reel-sound';
  function soundWanted() { try { return localStorage.getItem(SOUND_KEY) === 'on'; } catch (e) { return false; } }
  function rememberSound(on) { try { localStorage.setItem(SOUND_KEY, on ? 'on' : 'off'); } catch (e) {} }

  function init(stage) {
    var video = stage.querySelector('video');
    if (!video) return;
    stage.setAttribute('data-reel-ready', '');
    stage.insertAdjacentHTML('beforeend', CHROME);
    var big = stage.querySelector('.reel-big-play');
    var again = stage.querySelector('.reel-again');
    var play = stage.querySelector('.reel-play');
    var sound = stage.querySelector('.reel-sound');
    var fs = stage.querySelector('.reel-fs');
    var track = stage.querySelector('.reel-progress');
    var bar = track.querySelector('span');
    var knob = track.querySelector('.reel-knob');
    var userPaused = reduced;

    // The poster is a mid-reel frame, so it only shows when the reel will not
    // start on its own; otherwise it would flash before the opening black frame.
    function showPoster() {
      var src = video.getAttribute('data-poster');
      if (src && !video.getAttribute('poster')) video.setAttribute('poster', src);
      stage.classList.remove('is-starting');
    }
    if (reduced) showPoster(); else stage.classList.add('is-starting');
    video.addEventListener('playing', function () {
      stage.classList.remove('is-starting');
      stage.classList.add('has-played');
    });

    // Controls wake on interaction and sleep again after a short idle.
    var idle = 0;
    var wasAwake = false;
    var pointer = 'mouse';
    function wake() {
      stage.classList.add('is-awake');
      clearTimeout(idle);
      idle = setTimeout(function () { stage.classList.remove('is-awake'); }, 2500);
    }
    function sleep() {
      clearTimeout(idle);
      stage.classList.remove('is-awake');
    }
    stage.addEventListener('pointermove', function (e) { if (e.pointerType === 'mouse') wake(); });
    stage.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') sleep(); });
    stage.addEventListener('pointerdown', function (e) {
      pointer = e.pointerType;
      wasAwake = stage.classList.contains('is-awake');
      wake();
    });
    stage.addEventListener('keydown', wake);

    function sync() {
      var playing = !video.paused;
      stage.classList.toggle('is-playing', playing);
      play.setAttribute('aria-pressed', String(playing));
      play.setAttribute('aria-label', playing ? 'Pause the video' : 'Play the video');
    }
    function syncSound() {
      stage.classList.toggle('is-sounding', !video.muted);
      sound.setAttribute('aria-pressed', String(!video.muted));
      sound.setAttribute('aria-label', video.muted ? 'Turn sound on' : 'Turn sound off');
    }
    // Plays with sound when the visitor asked for it; a browser that refuses
    // sound without a gesture gets the muted reel instead.
    function start() {
      video.muted = !soundWanted();
      syncSound();
      var p = video.play();
      if (p && p.catch) p.catch(function () {
        if (!video.muted) {
          video.muted = true;
          syncSound();
          var q = video.play();
          if (q && q.catch) q.catch(function () { showPoster(); sync(); });
          return;
        }
        showPoster();
        sync();
      });
    }
    sound.addEventListener('click', function () {
      video.muted = !video.muted;
      rememberSound(!video.muted);
      syncSound();
      if (video.paused && !stage.classList.contains('is-ended')) { userPaused = false; start(); }
    });
    function toggle() {
      if (video.paused) { userPaused = false; start(); } else { userPaused = true; video.pause(); }
    }
    big.addEventListener('click', toggle);
    again.addEventListener('click', function () {
      video.currentTime = 0;
      userPaused = false;
      start();
    });
    video.addEventListener('ended', function () {
      userPaused = true; // do not replay just because it scrolls back into view
      stage.classList.add('is-ended');
      sync();
      tick();
    });
    video.addEventListener('play', function () { stage.classList.remove('is-ended'); });
    play.addEventListener('click', toggle);
    // A tap on sleeping controls only wakes them; a click (or a tap once awake) plays or pauses.
    video.addEventListener('click', function () {
      if (stage.classList.contains('is-ended')) return;
      if (pointer !== 'mouse' && !wasAwake) return;
      toggle();
    });
    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);

    // Full screen
    function toggleFull() {
      if (fullElement()) {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document);
      } else if (stage.requestFullscreen) {
        stage.requestFullscreen();
      } else if (stage.webkitRequestFullscreen) {
        stage.webkitRequestFullscreen();
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      }
      if (video.paused) { userPaused = false; start(); }
    }
    function syncFull() {
      var full = fullElement() === stage;
      stage.classList.toggle('is-full', full);
      fs.setAttribute('aria-label', full ? 'Exit full screen' : 'Full screen');
    }
    fs.addEventListener('click', toggleFull);
    video.addEventListener('dblclick', toggleFull);
    document.addEventListener('fullscreenchange', syncFull);
    document.addEventListener('webkitfullscreenchange', syncFull);

    // Progress and seeking
    function duration() { return isFinite(video.duration) && video.duration > 0 ? video.duration : 0; }
    function clock(s) { s = Math.round(s); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }
    function tick() {
      var d = duration();
      var f = d ? Math.min(1, video.currentTime / d) : 0;
      bar.style.transform = 'scaleX(' + f + ')';
      knob.style.left = (f * 100) + '%';
      track.setAttribute('aria-valuemax', String(Math.round(d)));
      track.setAttribute('aria-valuenow', String(Math.round(video.currentTime)));
      track.setAttribute('aria-valuetext', clock(video.currentTime) + ' of ' + clock(d));
      if (!video.paused) requestAnimationFrame(tick);
    }
    video.addEventListener('play', function () { requestAnimationFrame(tick); });
    video.addEventListener('seeked', tick);
    video.addEventListener('loadedmetadata', tick);

    function seek(time) {
      var d = duration();
      if (!d) return;
      video.currentTime = Math.max(0, Math.min(d - 0.05, time));
      if (stage.classList.contains('is-ended') && video.currentTime < d - 0.1) {
        stage.classList.remove('is-ended');
        sync();
      }
      tick();
    }
    function seekTo(clientX) {
      var r = track.getBoundingClientRect();
      seek(Math.max(0, Math.min(1, (clientX - r.left) / r.width)) * duration());
    }
    var seeking = false;
    var resume = false;
    track.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      e.stopPropagation();
      wake();
      seeking = true;
      resume = !video.paused;
      if (resume) video.pause();
      stage.classList.add('is-seeking');
      if (track.setPointerCapture) track.setPointerCapture(e.pointerId);
      seekTo(e.clientX);
    });
    track.addEventListener('pointermove', function (e) {
      if (!seeking) return;
      wake();
      seekTo(e.clientX);
    });
    function endSeek() {
      if (!seeking) return;
      seeking = false;
      stage.classList.remove('is-seeking');
      if (resume) { userPaused = false; start(); }
    }
    track.addEventListener('pointerup', endSeek);
    track.addEventListener('pointercancel', endSeek);
    track.addEventListener('keydown', function (e) {
      var step = { ArrowLeft: -2, ArrowDown: -2, ArrowRight: 2, ArrowUp: 2, PageDown: -10, PageUp: 10 }[e.key];
      if (step) seek(video.currentTime + step);
      else if (e.key === 'Home') seek(0);
      else if (e.key === 'End') seek(duration());
      else return;
      e.preventDefault();
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        var visible = entries[0].isIntersecting;
        if (visible && !userPaused) start();
        if (!visible && !video.paused && !fullElement()) video.pause();
      }, { threshold: 0.35 }).observe(stage);
    } else if (!userPaused) {
      start();
    }
    sync();
    tick();
  }

  function scan() {
    var stages = document.querySelectorAll('.reel-stage:not([data-reel-ready])');
    for (var i = 0; i < stages.length; i++) init(stages[i]);
  }
  scan();
  // Pages that render their content later (single-page apps) get their reels too.
  if ('MutationObserver' in window) new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
})();
