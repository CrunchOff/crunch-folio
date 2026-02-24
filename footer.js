function loadFooter() {
  const isAboutPage = window.location.pathname.includes('about.html');
  
  let footerHTML = '';

  if (isAboutPage) {
    footerHTML = `
      <section class="footer-container">
        <div class="footer-item" style="margin-top: 0px; margin-bottom: 0px;padding-bottom: 16px;">
          <a href="https://www.instagram.com/belote_bask/" target="_blank">
            <p>dessin par @belote_bask</p>
          </a>
        </div>
        <div class="footer-item"></div>
        <div class="footer-item"></div>
        <div class="footer-item"></div>
        <div class="footer-item"></div>
      </section>
    `;
  } else {
    footerHTML = `
      <section class="footer-container">
        <div class="footer-item">
          <a href="about.html">
            <p style="font-weight: bold;">ABOUT ME</p>
          </a>
        </div>

        <div class="footer-item">
          <i class="fas fa-arrow-right fa-fw fa-lg animated-icon"></i>
          <a href="https://www.instagram.com/victorliger.design" target="_blank" class="link-style">@victorliger.design</a>
        </div>

        <div class="footer-item">
          <p>1312 all day</p>
        </div>

        <div class="footer-item">
          <p>victor.liger28@gmail.com</p>
        </div>

        <div class="footer-item" style="margin-top: 0px; margin-bottom: 0px;padding-bottom: 16px;">
          <img src="https://www.dropbox.com/scl/fi/uy5lrf5i6721tdvelso2u/bw-logo.svg?rlkey=x60lf628thixdkqjeaso8r0oq&raw=1" class="logo-img">
        </div>
      </section>
    `;
  }

  const footerElement = document.querySelector('footer');
  if (footerElement) {
    footerElement.innerHTML = footerHTML;
  }
}

// Run the function
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadFooter);
} else {
  loadFooter();
}
