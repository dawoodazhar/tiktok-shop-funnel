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

  /* ---------- Side rail active dot + click-to-scroll ---------- */
  const railButtons = document.querySelectorAll('.side-rail button');
  const sections = Array.from(railButtons)
    .map(btn => document.getElementById(btn.dataset.target))
    .filter(Boolean);

  railButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  if ('IntersectionObserver' in window && sections.length) {
    const railObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          railButtons.forEach(b => b.classList.remove('active'));
          const match = document.querySelector(`.side-rail button[data-target="${entry.target.id}"]`);
          if (match) match.classList.add('active');
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(sec => railObserver.observe(sec));
  }

  /* ---------- Sticky mobile CTA (show after hero) ---------- */
  const stickyCta = document.getElementById('stickyCta');
  const heroSection = document.getElementById('hero');
  if (stickyCta && heroSection) {
    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          stickyCta.classList.remove('show');
        } else {
          stickyCta.classList.add('show');
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

});
