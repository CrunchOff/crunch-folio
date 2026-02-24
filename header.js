function loadHeader() {
  const headerHTML = `
    <section class="header-grid-container">
      <div class="header-item">
        <a href="index.html">
          <h1 class="home-button">CrunchFolio</h1>
        </a>
      </div>

      <div id="sketch-holder">
        <!-- P5.js sketch will be injected here by sketch.js -->
      </div>

      <div class="header-item-empty"></div>
      <div class="header-item-empty"></div>

      <div class="header-item-2">
        <h2 class="footer-h2">
          Design Numérique
        </h2>
      </div>
    </section>
  `;
  const headerElement = document.querySelector('header');
  if (headerElement) {
    headerElement.innerHTML = headerHTML;
  }
}

// Run the function
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadHeader);
} else {
  loadHeader();
}
