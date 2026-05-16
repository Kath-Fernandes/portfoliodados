// ============================================================
//  PORTFOLIO - main.js
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- HAMBURGER MENU ---- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Fecha menu ao clicar em link
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  /* ---- ACTIVE NAV LINK on scroll ---- */
  const sections = document.querySelectorAll('section[id], div[id]');
  const allNavLinks = document.querySelectorAll('.nav-links a');

  function updateActiveLink() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    allNavLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
    });
  }

  /* ---- SCROLL TO TOP ---- */
  const scrollTopBtn = document.getElementById('scrollTop');
  function handleScroll() {
    if (window.scrollY > 400) scrollTopBtn?.classList.add('visible');
    else scrollTopBtn?.classList.remove('visible');
    updateActiveLink();
    revealOnScroll();
    animateSkillBars();
  }

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ---- REVEAL ON SCROLL ---- */
  const reveals = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) el.classList.add('visible');
    });
  }
  revealOnScroll();

  /* ---- SKILL BARS ANIMATION ---- */
  let skillsAnimated = false;
  function animateSkillBars() {
    if (skillsAnimated) return;
    const skillsSection = document.getElementById('sobre');
    if (!skillsSection) return;
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      document.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.width = bar.getAttribute('data-width') || '70%';
      });
      skillsAnimated = true;
    }
  }
  animateSkillBars();

  /* ---- LIGHTBOX ---- */
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  document.querySelectorAll('.galeria-item[data-src]').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-src');
      if (!src) return;
      lightboxImg.src = src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  function closeLightbox() {
    lightbox?.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ---- CONTACT FORM (simulado) ---- */
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = '✓ Mensagem enviada!';
    btn.style.background = 'var(--sage)';
    setTimeout(() => {
      btn.textContent = 'Enviar mensagem';
      btn.style.background = '';
      form.reset();
    }, 3000);
  });

  /* ---- YEAR auto ---- */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
