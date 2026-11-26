<?php
// Hlong_love.php - Standalone PHP Page matching localhost/SreyHong/Hlong_love.php
?>
<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="theme-color" content="#EEEEEE">
  <title>Document</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💕</text></svg>">
  <link rel="stylesheet" href="style.css">
</head>
<body class="prank-active">

  <!-- Floating Background Particles -->
  <div class="bg-particles" id="bg-particles"></div>

  <!-- Top Action Controls -->
  <header class="top-bar">
    <button class="top-control-btn" id="fullscreen-toggle" title="ពេញអេក្រង់ / ចាកចេញ" aria-label="Toggle Fullscreen">
      <span class="fs-icon">⛶</span>
      <span class="btn-text">ពេញអេក្រង់</span>
    </button>
    <button class="top-control-btn icon-only" id="audio-toggle" title="បិទ/បើកសំឡេង" aria-label="Toggle Sound">
      🔊
    </button>
  </header>

  <main class="app-viewport">
    <div class="prank-container">
      
      <!-- Comic Graphic ("FUCK YOU!") -->
      <div class="comic-box">
        <img src="assets/comic.png" alt="Comic Prank">
      </div>

      <!-- Khmer Text Lines -->
      <div class="comic-text-area">
        <h2 class="prank-question">ចុចមើលធ្វើអ្វី?</h2>
        <p class="prank-love-text">💕 💕 ស្រឡាញ់ញុមមែន 🥰 🥰</p>
      </div>

      <!-- Action Navigation -->
      <div class="prank-actions">
        <a href="index.html" class="action-btn replay">
          <span>👈</span> ត្រឡប់ក្រោយ
        </a>
        <button class="action-btn secondary" id="share-btn">
          <span>🔗</span> ចែករំលែក
        </button>
      </div>

    </div>
  </main>

  <script src="script.js"></script>
</body>
</html>
