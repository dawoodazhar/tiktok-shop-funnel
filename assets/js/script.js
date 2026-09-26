// ============================================================
// Anologe — TikTok Shop funnel interactions
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Sticky mobile CTA (show after hero) ---------- */
  const stickyCta = document.getElementById('stickyCta');
  const heroSection = document.getElementById('hero'); const waFloat = document.querySelector('.wa-float');
  if (stickyCta && heroSection) {
    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          stickyCta.classList.remove('show'); if (waFloat) waFloat.classList.remove('float-raised');
        } else {
          stickyCta.classList.add('show'); if (waFloat) waFloat.classList.add('float-raised');
        }
      });
    }, { threshold: 0 });
    ctaObserver.observe(heroSection);
  }

  /* ---------- Mobile hamburger menu ---------- */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburgerBtn && mobileMenu) {
    const closeMenu = () => {
      hamburgerBtn.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('open');
    };
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('open', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

      /* ---------- Cookie consent banner (GDPR) ---------- */
      const CONSENT_KEY = 'anologe_cookie_consent';
      const consentBanner = document.getElementById('cookieConsent');
      const consentAccept = document.getElementById('cookieAccept');
      const consentReject = document.getElementById('cookieReject');

      function updateAnalyticsConsent(granted) {
              if (typeof gtag === 'function') {
                        gtag('consent', 'update', {
                                    'ad_storage': granted ? 'granted' : 'denied',
                                    'analytics_storage': granted ? 'granted' : 'denied'
                        });
              }
      }

      if (consentBanner) {
              const savedConsent = localStorage.getItem(CONSENT_KEY);
              if (savedConsent === 'granted') {
                        updateAnalyticsConsent(true);
              } else if (savedConsent === 'denied') {
                        updateAnalyticsConsent(false);
              } else {
                        consentBanner.classList.add('show');
              }

              if (consentAccept) {
                        consentAccept.addEventListener('click', () => {
                                    localStorage.setItem(CONSENT_KEY, 'granted');
                                    updateAnalyticsConsent(true);
                                    consentBanner.classList.remove('show');
                        });
              }
              if (consentReject) {
                        consentReject.addEventListener('click', () => {
                                    localStorage.setItem(CONSENT_KEY, 'denied');
                                    updateAnalyticsConsent(false);
                                    consentBanner.classList.remove('show');
                        });
              }
      }

  /* ---------- Theme toggle (dark / light) ---------- */
  const THEME_KEY = 'anologe_theme';
  const themeToggle = document.getElementById('themeToggle');

  const getStoredTheme = () => {
    try {
      const v = localStorage.getItem(THEME_KEY);
      return (v === 'light' || v === 'dark') ? v : null;
    } catch (e) { return null; }
  };
  const setTheme = (mode) => {
    if (mode === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  if (themeToggle) {
    const applyLabel = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    };
    applyLabel();

    // Manual click always sets an explicit, persistent choice and takes over
    // from the device/OS setting from this point on.
    themeToggle.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const next = isLight ? 'dark' : 'light';
      setTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      applyLabel();
    });

    // Live-follow the device/OS light-dark setting for as long as the user
    // hasn't explicitly picked a theme with the button above (no stored
    // preference yet). This fires immediately when the OS theme is switched,
    // without needing a page reload.
    if ('matchMedia' in window) {
      const mq = window.matchMedia('(prefers-color-scheme: light)');
      const followSystem = () => {
        if (getStoredTheme()) return; // user has an explicit choice, don't override it
        setTheme(mq.matches ? 'light' : 'dark');
        applyLabel();
      };
      if (mq.addEventListener) {
        mq.addEventListener('change', followSystem);
      } else if (mq.addListener) {
        mq.addListener(followSystem); // Safari < 14 fallback
      }
    }
  }

});

// ============================================================
// Two-step audit form (index.html #auditForm)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('auditForm');
  if (!form) return;

  const step1 = form.querySelector('[data-step="1"]');
  const step2 = form.querySelector('[data-step="2"]');
  const continueBtn = document.getElementById('formContinueBtn');
  const backBtn = document.getElementById('formBackBtn');
  const step2Fieldset = document.getElementById('step2Fieldset');
  const progress1 = form.querySelector('[data-progress-step="1"]');

  const progressWrap = form.querySelector('.form-progress');

  function goToStep2() {
    // Validate step 1 fields natively before proceeding
    const step1Inputs = step1.querySelectorAll('input[required]');
    for (const input of step1Inputs) {
      if (!input.checkValidity()) {
        input.reportValidity();
        return;
      }
    }
    step1.classList.remove('active');
    step2.classList.add('active');
    step2Fieldset.disabled = false;
    if (progressWrap) {
      progressWrap.innerHTML = '<span data-progress-step="1">Step 1</span><span class="active" data-progress-step="2">Step 2 of 2</span>';
    }
    step2.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function goToStep1() {
    step2.classList.remove('active');
    step1.classList.add('active');
    step2Fieldset.disabled = true;
    if (progressWrap) {
      progressWrap.innerHTML = '<span class="active" data-progress-step="1">Step 1 of 2</span>';
    }
  }

  if (continueBtn) continueBtn.addEventListener('click', goToStep2);
  if (backBtn) backBtn.addEventListener('click', goToStep1);

  // Hand off name + email to the Calendly booking step on the thank-you page.
  form.addEventListener('submit', () => {
    try {
      const name = form.querySelector('#f-name')?.value || '';
      const email = form.querySelector('#f-email')?.value || '';
      localStorage.setItem('anologe_lead_name', name);
      localStorage.setItem('anologe_lead_email', email);
    } catch (e) {}
  });
});
