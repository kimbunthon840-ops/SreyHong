/**
 * SreyHong Love Prank App
 * Interactive logic, Mobile Fullscreen setup, Haptics, Web Audio, and Particles
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const screenCard = document.getElementById('screen-card');
  const screenPrank = document.getElementById('screen-prank');
  const clickMeBtn = document.getElementById('click-me-btn');
  const replayBtn = document.getElementById('replay-btn');
  const shareBtn = document.getElementById('share-btn');
  const audioToggle = document.getElementById('audio-toggle');
  const fullscreenToggle = document.getElementById('fullscreen-toggle');
  const mobileFsBanner = document.getElementById('mobile-fs-banner');
  const fsBannerBtn = document.getElementById('fs-banner-btn');
  const fsBannerClose = document.getElementById('fs-banner-close');
  const particlesContainer = document.getElementById('bg-particles');
  const appViewport = document.querySelector('.app-viewport');

  let audioEnabled = true;
  let audioCtx = null;

  // ==========================================================================
  // Fullscreen Management for Phone / Desktop
  // ==========================================================================

  function isFullScreen() {
    return !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
  }

  function requestFullScreenMode() {
    const docEl = document.documentElement;
    try {
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(() => {});
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      } else if (docEl.mozRequestFullScreen) {
        docEl.mozRequestFullScreen();
      } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen();
      }
    } catch (e) {
      console.warn('Fullscreen request failed:', e);
    }
  }

  function exitFullScreenMode() {
    try {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } catch (e) {
      console.warn('Exit fullscreen failed:', e);
    }
  }

  function toggleFullScreenMode() {
    if (!isFullScreen()) {
      requestFullScreenMode();
    } else {
      exitFullScreenMode();
    }
  }

  // Update UI when fullscreen changes
  function updateFullScreenUI() {
    const active = isFullScreen();
    if (fullscreenToggle) {
      const fsIcon = fullscreenToggle.querySelector('.fs-icon');
      const btnText = fullscreenToggle.querySelector('.btn-text');
      if (fsIcon) fsIcon.textContent = active ? '🗗' : '⛶';
      if (btnText) btnText.textContent = active ? 'ចាកចេញ' : 'ពេញអេក្រង់';
      fullscreenToggle.setAttribute('title', active ? 'ចាកចេញពីពេញអេក្រង់' : 'បើកពេញអេក្រង់');
    }
    if (active && mobileFsBanner) {
      mobileFsBanner.classList.add('hidden');
    }
  }

  document.addEventListener('fullscreenchange', updateFullScreenUI);
  document.addEventListener('webkitfullscreenchange', updateFullScreenUI);
  document.addEventListener('mozfullscreenchange', updateFullScreenUI);
  document.addEventListener('MSFullscreenChange', updateFullScreenUI);

  if (fullscreenToggle) {
    fullscreenToggle.addEventListener('click', () => {
      initAudio();
      playPopSound();
      toggleFullScreenMode();
    });
  }

  if (fsBannerBtn) {
    fsBannerBtn.addEventListener('click', () => {
      initAudio();
      playPopSound();
      requestFullScreenMode();
      if (mobileFsBanner) mobileFsBanner.classList.add('hidden');
    });
  }

  if (fsBannerClose) {
    fsBannerClose.addEventListener('click', () => {
      if (mobileFsBanner) mobileFsBanner.classList.add('hidden');
    });
  }

  // Mobile Haptic Feedback (Vibration)
  function triggerHapticFeedback(pattern = [70, 50, 120]) {
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {}
    }
  }

  // ==========================================================================
  // Web Audio Synthesizer (Zero External Dependencies)
  // ==========================================================================

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Cute Pop / Click sound (High cheerful chime)
  function playPopSound() {
    if (!audioEnabled || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(1040, now + 0.12);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.15);
    } catch (e) {
      console.warn('Audio error', e);
    }
  }

  // Cute Cartoon Boing / Squeak sound for stickers
  function playBoingSound() {
    if (!audioEnabled || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch (e) {
      console.warn('Audio error', e);
    }
  }

  // Comedic Cartoon Prank "Wah Wah Wah Waaah" Sound Effect
  function playPrankSound() {
    if (!audioEnabled || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;

      // Note frequencies: D4, C#4, C4, B3 (Classic cartoon sad trombone / prank motif)
      const notes = [
        { freq: 293.66, start: 0.0, dur: 0.24 }, // D4
        { freq: 277.18, start: 0.25, dur: 0.24 }, // C#4
        { freq: 261.63, start: 0.50, dur: 0.24 }, // C4
        { freq: 246.94, start: 0.76, dur: 0.65 }  // B3 (extended wah vibrato)
      ];

      notes.forEach((note) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(note.freq, now + note.start);

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(900, now + note.start);

        if (note.start >= 0.7) {
          const lfo = audioCtx.createOscillator();
          const lfoGain = audioCtx.createGain();
          lfo.frequency.value = 6;
          lfoGain.gain.value = 8;
          lfo.connect(osc.frequency);
          lfo.start(now + note.start);
          lfo.stop(now + note.start + note.dur);
        }

        gain.gain.setValueAtTime(0.22, now + note.start);
        gain.gain.exponentialRampToValueAtTime(0.001, now + note.start + note.dur);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now + note.start);
        osc.stop(now + note.start + note.dur);
      });
    } catch (e) {
      console.warn('Audio error', e);
    }
  }

  // ==========================================================================
  // Particles & Animations
  // ==========================================================================

  const emojis = ['💕', '💖', '🌸', '✨', '💗', '💌', '🧸'];
  function createParticle() {
    if (!particlesContainer) return;
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = Math.random() * 96 + 'vw';
    p.style.animationDuration = Math.random() * 4 + 6 + 's';
    p.style.fontSize = Math.random() * 1.2 + 1 + 'rem';
    p.style.opacity = Math.random() * 0.5 + 0.3;

    particlesContainer.appendChild(p);

    setTimeout(() => {
      p.remove();
    }, 11000);
  }

  for (let i = 0; i < 8; i++) {
    setTimeout(createParticle, i * 400);
  }
  setInterval(createParticle, 1200);

  // Sticker bounce click interactions
  document.querySelectorAll('.sticker').forEach((stk) => {
    stk.addEventListener('click', (e) => {
      initAudio();
      playBoingSound();
      triggerHapticFeedback([40]);
      stk.style.transform = 'scale(1.35) rotate(15deg)';
      setTimeout(() => {
        stk.style.transform = '';
      }, 350);
      spawnBurst(e.clientX, e.clientY, ['✨', '💖', '🌸']);
    });
  });

  // Particle burst effect on click
  function spawnBurst(x, y, items = ['💕', '💥', '✨']) {
    for (let i = 0; i < 14; i++) {
      const b = document.createElement('div');
      b.style.position = 'fixed';
      b.style.left = x + 'px';
      b.style.top = y + 'px';
      b.style.pointerEvents = 'none';
      b.style.zIndex = '999';
      b.style.fontSize = Math.random() * 14 + 18 + 'px';
      b.style.userSelect = 'none';
      b.textContent = items[Math.floor(Math.random() * items.length)];

      const angle = (Math.PI * 2 * i) / 14 + (Math.random() - 0.5) * 0.4;
      const speed = Math.random() * 100 + 75;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      document.body.appendChild(b);

      b.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${vx}px, ${vy}px) scale(0.3)`, opacity: 0 }
      ], {
        duration: 850,
        easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)'
      }).onfinish = () => b.remove();
    }
  }

  // ==========================================================================
  // Main Action: Click "ចុចខ្ញុំ 🤩"
  // ==========================================================================

  if (clickMeBtn) {
    clickMeBtn.addEventListener('click', (e) => {
      initAudio();
      playPopSound();
      setTimeout(playPrankSound, 150);

      // Auto-enter Fullscreen on phone for maximum surprise!
      requestFullScreenMode();
      if (mobileFsBanner) mobileFsBanner.classList.add('hidden');

      // Phone vibration on reveal
      triggerHapticFeedback([80, 60, 140]);

      // Confetti burst
      const rect = clickMeBtn.getBoundingClientRect();
      spawnBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, ['💕', '💥', '🖕', '🔥', '😂', '✨']);

      // Screen shake effect
      if (appViewport) {
        appViewport.classList.add('screen-shake');
        setTimeout(() => appViewport.classList.remove('screen-shake'), 600);
      }

      // Transition to Prank screen
      setTimeout(() => {
        screenCard.classList.remove('active');
        screenCard.classList.add('hidden');

        screenPrank.classList.remove('hidden');
        screenPrank.classList.add('active');

        document.body.classList.add('prank-active');
        window.location.hash = 'prank';
      }, 350);
    });
  }

  // Action: Play Again (Reset to Card)
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      initAudio();
      playPopSound();
      triggerHapticFeedback([40]);

      screenPrank.classList.remove('active');
      screenPrank.classList.add('hidden');

      screenCard.classList.remove('hidden');
      screenCard.classList.add('active');

      document.body.classList.remove('prank-active');
      window.location.hash = '';
    });
  }

  // Action: Share Link
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      initAudio();
      playPopSound();
      triggerHapticFeedback([40]);
      const shareUrl = window.location.href.split('#')[0];
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showToast('បានចម្លងតំណភ្ជាប់ជោគជ័យ! 💕');
        }).catch(() => {
          showToast('តំណភ្ជាប់: ' + shareUrl);
        });
      } else {
        showToast('តំណភ្ជាប់: ' + shareUrl);
      }
    });
  }

  // Toast Notification
  function showToast(msg) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: max(24px, env(safe-area-inset-bottom));
        left: 50%;
        transform: translateX(-50%) translateY(50px);
        background: rgba(30, 30, 30, 0.94);
        color: #FFFFFF;
        padding: 12px 24px;
        border-radius: 50px;
        font-size: 15px;
        font-family: var(--font-khmer);
        font-weight: 600;
        z-index: 1000;
        box-shadow: 0 8px 24px rgba(0,0,0,0.25);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        pointer-events: none;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(50px)';
    }, 2500);
  }

  // Audio mute/unmute toggle
  if (audioToggle) {
    audioToggle.addEventListener('click', () => {
      initAudio();
      audioEnabled = !audioEnabled;
      audioToggle.textContent = audioEnabled ? '🔊' : '🔇';
      audioToggle.setAttribute('title', audioEnabled ? 'បិទសំឡេង' : 'បើកសំឡេង');
      if (audioEnabled) {
        playPopSound();
      }
    });
  }

  // Handle URL hash on load (e.g. #prank)
  if (window.location.hash === '#prank') {
    screenCard.classList.remove('active');
    screenCard.classList.add('hidden');
    screenPrank.classList.remove('hidden');
    screenPrank.classList.add('active');
    document.body.classList.add('prank-active');
  }
});
