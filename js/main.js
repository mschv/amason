/**
 * AMASON.COM — Main JS
 * Shared interactions: cart counter, collapse sections, carousels, etc.
 */

// ── CART ──────────────────────────────────────────────────────────────────────
let cartCount = 0;

function updateCartDisplay() {
  document.querySelectorAll('#cart-count-overlay, .cart-count').forEach(el => {
    el.textContent = cartCount;
  });
}

function addToCart() {
  cartCount++;
  updateCartDisplay();
}

// ── COLLAPSIBLE SECTIONS ──────────────────────────────────────────────────────
function initCollapseSections() {
  document.querySelectorAll('.collapse-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const arrow = header.querySelector('.collapse-arrow');
      if (body) {
        body.classList.toggle('open');
        if (arrow) arrow.textContent = body.classList.contains('open') ? '▲' : '▼';
      }
    });
  });
}

// ── CAROUSELS ────────────────────────────────────────────────────────────────
function initCarousels() {
  document.querySelectorAll('.carousel-wrap').forEach(wrap => {
    const carousel = wrap.querySelector('.carousel');
    const prev = wrap.querySelector('.carousel-btn.prev');
    const next = wrap.querySelector('.carousel-btn.next');
    if (!carousel) return;

    const scrollAmount = 180 * 3;

    if (prev) prev.addEventListener('click', () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    if (next) next.addEventListener('click', () => {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });
}

// ── SALE COUNTDOWN TIMER ──────────────────────────────────────────────────────
function initSaleCountdown() {
  var el = document.getElementById('subnav-countdown');
  if (!el) return;

  // Fix end time at 8 hours from first page load, persisted in sessionStorage
  var key = 'amason_sale_end';
  var end = parseInt(sessionStorage.getItem(key), 10);
  if (!end || end < Date.now()) {
    end = Date.now() + 8 * 60 * 60 * 1000;
    sessionStorage.setItem(key, end);
  }

  function tick() {
    var diff = end - Date.now();
    if (diff <= 0) { el.textContent = '00:00:00'; return; }
    var h = Math.floor(diff / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
    el.textContent = (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }
  tick();
  setInterval(tick, 1000);
}

// ── HERO CAROUSEL ─────────────────────────────────────────────────────────────
function initHeroCarousel() {
  const track = document.querySelector('.hero-track');
  if (!track) return;

  const slides = track.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.querySelector('.hero-prev');
  const nextBtn = document.querySelector('.hero-next');
  let current = 0;
  let timer;

  function goTo(i) {
    current = (i + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function(d, idx) { d.classList.toggle('active', idx === current); });
  }

  function startTimer() { timer = setInterval(function() { goTo(current + 1); }, 5000); }
  function resetTimer() { clearInterval(timer); startTimer(); }

  if (prevBtn) prevBtn.addEventListener('click', function() { goTo(current - 1); resetTimer(); });
  if (nextBtn) nextBtn.addEventListener('click', function() { goTo(current + 1); resetTimer(); });
  dots.forEach(function(dot, i) { dot.addEventListener('click', function() { goTo(i); resetTimer(); }); });

  startTimer();
}

// ── PRODUCT PAGE: IMAGE GALLERY ───────────────────────────────────────────────
function initImageGallery() {
  const mainImg = document.querySelector('.main-image-wrap img');
  if (!mainImg) return;

  document.querySelectorAll('.thumb-strip img').forEach(thumb => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.thumb-strip img').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      mainImg.src = thumb.src;
    });
  });
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSaleCountdown();
  initHeroCarousel();
  initCollapseSections();
  initCarousels();
  initImageGallery();
  updateCartDisplay();

  // Wire up "Add to Cart" buttons
  document.querySelectorAll('.btn-add, .add-btn').forEach(btn => {
    btn.addEventListener('click', addToCart);
  });
});
