/**
 * AMASON.COM — Shared Components
 * Injects the navbar and footer into every page automatically.
 * Usage: <div id="navbar-placeholder"></div>  (in your HTML)
 *        <div id="footer-placeholder"></div>
 */



const CART_ICON_SVG = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 4h2.5l3.5 16h14l2-10H9" stroke="white" stroke-width="2" stroke-linecap="round"/>
  <circle cx="13" cy="24" r="2" fill="white"/>
  <circle cx="23" cy="24" r="2" fill="white"/>
</svg>`;

const SEARCH_ICON_SVG = `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="8.5" cy="8.5" r="5.5" stroke="#131921" stroke-width="2"/>
  <path d="M13 13l4 4" stroke="#131921" stroke-width="2" stroke-linecap="round"/>
</svg>`;

function getNavbar() {
  var inPages = window.location.pathname.includes('/pages/');
  var indexHref = inPages ? '../index.html' : 'index.html';
  var assetBase = inPages ? '../' : '';
  return `
  <nav class="navbar">
    <a href="${indexHref}" class="nav-logo">
      <img src="${assetBase}assets/images/logo.png" alt="Amason logo" class="logo-img" height="40">
    </a>
    <div class="nav-deliver">
      <span class="top">Deliver to</span>
      <span class="bot">
        <svg width="10" height="14" viewBox="0 0 10 14" fill="white"><path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 5 3.5a1.5 1.5 0 0 1 0 3z"/></svg>
        United States
      </span>
    </div>
    <div class="nav-search">
      <select aria-label="Search category"><option>All</option></select>
      <input type="text" placeholder="Search Amason" aria-label="Search">
      <button aria-label="Search">${SEARCH_ICON_SVG}</button>
    </div>
    <div class="nav-flag">
      <span style="font-size:20px">🇺🇸</span>
      <span>EN</span>
    </div>
    <div class="nav-account">
      <span class="top">Hello, sign in</span>
      <span class="bot">Account &amp; Lists ▾</span>
    </div>
    <div class="nav-returns">
      <span class="top">Returns</span>
      <span class="bot">&amp; Orders</span>
    </div>
    <div class="nav-cart">
      <span class="cart-count" id="cart-count-overlay">0</span>
      ${CART_ICON_SVG}
      <span class="cart-label">Cart</span>
    </div>
  </nav>
  <div class="subnav">
    <div class="subnav-item all">
      <svg viewBox="0 0 18 14" fill="white"><rect width="18" height="2"/><rect y="6" width="18" height="2"/><rect y="12" width="18" height="2"/></svg>
      All
    </div>
    <div class="subnav-item">Today's Steals</div>
    <div class="subnav-item">Customer Service</div>
    <div class="subnav-item">Registry</div>
    <div class="subnav-item">Gift Cards</div>
    <div class="subnav-item">Sell</div>
    <div class="subnav-item">Amason's Basics</div>
    <div class="subnav-item">Prime</div>
    <div class="subnav-item">Groceries</div>
    <div class="subnav-item">Electronics</div>
    <div class="subnav-item">Fashion</div>
    <div class="subnav-sale-timer">
      <span class="subnav-sale-label">⚡ Flash Sale ends in</span>
      <span class="subnav-countdown" id="subnav-countdown">--:--:--</span>
    </div>
  </div>`;
}

function getFooter() {
  var assetBase = window.location.pathname.includes('/pages/') ? '../' : '';
  return `
  <div class="footer-top">Back to top</div>
  <div style="background:#232F3E">
    <div class="footer-mid">
      <div class="footer-col">
        <h4>Get to Know Us</h4>
        <ul>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Amason</a></li>
          <li><a href="#">Investor Relations</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Make Money with Us</h4>
        <ul>
          <li><a href="#">Sell on Amason</a></li>
          <li><a href="#">Become an Affiliate</a></li>
          <li><a href="#">Advertise Your Products</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Amason Payment Products</h4>
        <ul>
          <li><a href="#">Amason Business Card</a></li>
          <li><a href="#">Shop with Points</a></li>
          <li><a href="#">Reload Your Balance</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Let Us Help You</h4>
        <ul>
          <li><a href="#">Amason and COVID-19</a></li>
          <li><a href="#">Your Account</a></li>
          <li><a href="#">Your Orders</a></li>
          <li><a href="#">Returns &amp; Replacements</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom-wrap">
    <div class="footer-bottom">
      <div class="logo">
      <img src="${assetBase}assets/images/logo.png" alt="Amason logo" class="logo-img" width="120">
      </div>
      <div>© 2026 Amason.com</div>
    </div>
  </div>`;
}

// Auto-inject on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = getNavbar();

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = getFooter();
});
