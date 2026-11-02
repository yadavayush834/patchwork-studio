/* ==========================================================================
   Mosslight demo controls
   Keeps the marketing page thin and lets the custom element do the painting.
   ========================================================================== */

(() => {
  'use strict';

  const sky = document.querySelector('#sky');
  if (!sky) return;

  const body = document.body;
  const responseText = document.querySelector('#response-text');
  const signalButton = document.querySelector('#signal-button');
  const embedButtons = Array.from(document.querySelectorAll('#embed-button, [data-open-embed]'));
  const motionToggle = document.querySelector('#motion-toggle');
  const motionLabel = document.querySelector('#motion-label');
  const fpsValue = document.querySelector('#fps-value');
  const dialog = document.querySelector('#embed-dialog');
  const dialogClose = document.querySelector('#embed-close');
  const installCode = document.querySelector('#install-code');
  const copyButton = document.querySelector('#copy-button');
  const copyStatus = document.querySelector('#copy-status');
  const themeColor = document.querySelector('#theme-color');

  const moodButtons = Array.from(document.querySelectorAll('button[data-mood]'));
  const moods = {
    moss: {
      color: '#03070b',
      line: 'Moss. The grove settles into green.'
    },
    ember: {
      color: '#0d0507',
      line: 'Ember. The lake catches the last light.'
    },
    mono: {
      color: '#050505',
      line: 'Mono. The night is all signal.'
    }
  };

  const signalLines = [
    'Signal sent. A light answers from the far shore.',
    'The dish turns. Something crosses the water.',
    'Reply received. It sounds like rain on leaves.'
  ];

  let signalCount = 0;
  let copyTimer = 0;
  let lastDialogTrigger = null;

  function say(message) {
    if (!responseText) return;
    responseText.textContent = message;
  }

  function currentMood() {
    const mood = sky.getAttribute('mood') || 'moss';
    return moods[mood] ? mood : 'moss';
  }

  function syncMoodUI(mood) {
    for (const button of moodButtons) {
      const active = button.dataset.mood === mood;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    }
    body.dataset.mood = mood;
    if (themeColor) themeColor.setAttribute('content', moods[mood].color);
    if (installCode) {
      installCode.textContent =
        `<script src="mosslight.js" defer></script>\n` +
        `<mosslight-bg mood="${mood}"></mosslight-bg>`;
    }
  }

  function syncMotionUI() {
    const running = !sky.isPaused;
    if (motionToggle) motionToggle.setAttribute('aria-pressed', String(running));
    if (motionLabel) motionLabel.textContent = running ? 'Motion on' : 'Motion paused';
    body.classList.toggle('is-paused', !running);
    if (!running && fpsValue) fpsValue.textContent = '—';
  }

  function updateFps() {
    if (!fpsValue) return;
    const fps = sky.fps;
    fpsValue.textContent = fps > 0 ? String(Math.round(fps)) : '—';
  }

  function setMood(mood) {
    if (!moods[mood]) return;
    sky.setMood(mood);
    syncMoodUI(mood);
    say(moods[mood].line);
  }

  function sendSignal() {
    if (sky.isPaused) sky.play();
    sky.signal();
    syncMotionUI();

    if (signalButton) {
      signalButton.classList.remove('is-signalling');
      // Restart the little star turn even when the button is pressed quickly.
      void signalButton.offsetWidth;
      signalButton.classList.add('is-signalling');
      window.setTimeout(() => signalButton.classList.remove('is-signalling'), 700);
    }

    say(signalLines[signalCount % signalLines.length]);
    signalCount += 1;
  }

  function openDialog(trigger) {
    if (!dialog) return;
    lastDialogTrigger = trigger || null;
    syncMoodUI(currentMood());
    copyStatus.textContent = '';
    copyButton.textContent = 'Copy install';

    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
  }

  function closeDialog() {
    if (!dialog) return;
    if (typeof dialog.close === 'function' && dialog.open) {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
    }
  }

  async function copyInstall() {
    const text = installCode ? installCode.textContent : '';
    if (!text) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(text);
        } catch (error) {
          legacyCopy(text);
        }
      } else {
        legacyCopy(text);
      }
      copyStatus.textContent = 'Copied. The grove is ready to move in.';
      copyButton.textContent = 'Copied';
      window.clearTimeout(copyTimer);
      copyTimer = window.setTimeout(() => {
        copyButton.textContent = 'Copy install';
        copyStatus.textContent = '';
      }, 2600);
    } catch (error) {
      copyStatus.textContent = 'Copy did not work. Select the code above and copy it manually.';
      selectInstallCode();
    }
  }

  function legacyCopy(text) {
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.top = '-1000px';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    field.setSelectionRange(0, field.value.length);
    let copied = false;
    try {
      copied = document.execCommand('copy');
    } finally {
      field.remove();
    }
    if (!copied) throw new Error('Copy command was refused');
  }

  function selectInstallCode() {
    if (!installCode) return;
    const range = document.createRange();
    range.selectNodeContents(installCode);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  /* Wire the controls ---------------------------------------------------- */

  for (const button of moodButtons) {
    if (!button.dataset.mood) continue;
    button.addEventListener('click', () => setMood(button.dataset.mood));
  }

  if (signalButton) {
    signalButton.addEventListener('click', sendSignal);
  }

  if (motionToggle) {
    motionToggle.addEventListener('click', () => {
      sky.toggle();
      syncMotionUI();
      say(sky.isPaused
        ? 'Motion paused. The grove holds its breath.'
        : 'Motion on. The fireflies are awake.');
    });
  }

  for (const button of embedButtons) {
    button.addEventListener('click', () => openDialog(button));
  }

  if (dialogClose) {
    dialogClose.addEventListener('click', closeDialog);
  }

  if (dialog) {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) closeDialog();
    });
    dialog.addEventListener('close', () => {
      copyStatus.textContent = '';
      if (lastDialogTrigger && typeof lastDialogTrigger.focus === 'function') {
        lastDialogTrigger.focus({ preventScroll: true });
      }
    });
  }

  if (copyButton) {
    copyButton.addEventListener('click', copyInstall);
  }

  // Keep the demo honest if the element's motion changes from the outside
  // (for example, when the operating system's reduced-motion setting changes).
  sky.addEventListener('mosslight:motion', syncMotionUI);
  sky.addEventListener('mosslight:ready', () => {
    syncMoodUI(currentMood());
    syncMotionUI();
  });

  syncMoodUI(currentMood());
  syncMotionUI();
  updateFps();
  window.setInterval(updateFps, 650);
})();
