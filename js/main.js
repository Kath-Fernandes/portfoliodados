// ============================================================
//  PORTFOLIO - main.js (Versão à prova de falhas)
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

  /* ---- 1. REVEAL ON SCROLL (Prioridade: Fazer o conteúdo aparecer) ---- */
  const reveals = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    reveals.forEach(function(el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('visible');
      }
    });
  }
  // Roda imediatamente ao abrir a página
  revealOnScroll();


  /* ---- 2. HAMBURGER MENU ---- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    // Fecha menu ao clicar em link
    const links = navLinks.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }


  /* ---- 3. ACTIVE NAV LINK on scroll ---- */
  const sections = document.querySelectorAll('section[id], div[id]');
  const allNavLinks = document.querySelectorAll('.nav-links a');

  function updateActiveLink() {
    let current = '';
    sections.forEach(function(sec) {
      if (window.scrollY >= sec.offsetTop - 120) {
        current = sec.id;
      }
    });
    allNavLinks.forEach(function(a) {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) {
        a.classList.add('active');
      }
    });
  }


  /* ---- 4. SCROLL TO TOP & SKILL BARS ---- */
  const scrollTopBtn = document.getElementById('scrollTop');
  let skillsAnimated = false;

  function animateSkillBars() {
    if (skillsAnimated) return;
    const skillsSection = document.getElementById('sobre');
    if (!skillsSection) return;
    const rect = skillsSection.getBoundingClientRect();
    
    if (rect.top < window.innerHeight) {
      const bars = document.querySelectorAll('.skill-bar');
      bars.forEach(function(bar) {
        bar.style.width = bar.getAttribute('data-width') || '70%';
      });
      skillsAnimated = true;
    }
  }
  // Tenta animar as barras logo no carregamento também
  animateSkillBars();

  function handleScroll() {
    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
    updateActiveLink();
    revealOnScroll();
    animateSkillBars();
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Agrupa todos os eventos de scroll aqui
  window.addEventListener('scroll', handleScroll);


  /* ---- 5. LIGHTBOX (Atualizado) ---- */
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  if (lightbox && lightboxImg) {
    const galeriaItems = document.querySelectorAll('.galeria-item');
    
    galeriaItems.forEach(function(item) {
      item.addEventListener('click', function() {
        const img = item.querySelector('img'); 
        if (!img || !img.src) return;
        
        lightboxImg.src = img.src; 
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }
    
    lightbox.addEventListener('click', function(e) { 
      if (e.target === lightbox) closeLightbox(); 
    });
    
    document.addEventListener('keydown', function(e) { 
      if (e.key === 'Escape') closeLightbox(); 
    });
  }


  /* ---- 6. CONTACT FORM ---- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      if (btn) {
        btn.textContent = '✓ Mensagem enviada!';
        btn.style.background = 'var(--sage)';
        setTimeout(function() {
          btn.textContent = 'Enviar mensagem';
          btn.style.background = '';
          form.reset();
        }, 3000);
      }
    });
  }


  /* ---- 7. YEAR auto ---- */
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  /* ---- 8. CARROSSEL DE EVENTOS ---- */
  const track = document.getElementById('carouselTrack');
  const container = document.querySelector('.carousel-container'); 
  
  if (track && container) {
    const items = Array.from(track.children);
    let currentTranslate = 0; 

    function moveCarousel() {
      if (items.length === 0) return;

      const itemWidth = items[0].getBoundingClientRect().width;
      const gap = 20; 
      const maxScroll = track.scrollWidth - container.clientWidth;

      if (maxScroll <= 0) return;

      currentTranslate += (itemWidth + gap);

      if (currentTranslate > maxScroll) {
        if (currentTranslate - (itemWidth + gap) >= maxScroll) {
          currentTranslate = 0;
        } else {
          currentTranslate = maxScroll;
        }
      }

      track.style.transform = 'translateX(-' + currentTranslate + 'px)';
    }

    setInterval(moveCarousel, 3000);
  }

});MContentLoaded - Apenas um fechamento no final!
