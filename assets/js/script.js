// ============================================================
// Analoge — TikTok Shop funnel interactions
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

  /* ---------- Video play swap ---------- */
  const videoFrame = document.getElementById('videoFrame');
  const playBtn = document.getElementById('playBtn');
  if (videoFrame && playBtn) {
    playBtn.addEventListener('click', () => {
      const videoUrl = videoFrame.dataset.video;
      if (!videoUrl) {
        // No video wired up yet — let the freelancer know instead of failing silently.
        alert('Add your video URL to the data-video attribute on #videoFrame in index.html to enable playback.');
        return;
      }
      videoFrame.innerHTML = `<iframe src="${videoUrl}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    });
  }

  /* ---------- JotForm fallback visibility ---------- */
  const jotformFrame = document.getElementById('jotformFrame');
  const formFallback = document.getElementById('formFallback');
  if (jotformFrame && formFallback) {
    let loaded = false;
    jotformFrame.addEventListener('load', () => { loaded = true; });
    setTimeout(() => {
      if (!loaded) formFallback.style.display = 'block';
    }, 4000);
  }

});
