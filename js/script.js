document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Logic
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const closeBtn = document.querySelector('.close-btn');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');

  // Open Menu
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      mobileMenuOverlay.classList.add('active');
    });
  }

  // Close Menu
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      mobileMenuOverlay.classList.remove('active');
    });
  }

  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuOverlay.classList.remove('active');
    });
  });

  // ==========================================================================
  // Scroll Animations (Intersection Observer)
  // ==========================================================================
  const fadeElements = document.querySelectorAll('.fade-in-up');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Ativa quando 15% do elemento estiver visível
  };

  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Para de observar após animar (melhora performance)
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => {
    fadeObserver.observe(el);
  });

  // ==========================================================================
  // Form Validation & Submit Logic
  // ==========================================================================
  const orcamentoForm = document.getElementById('orcamento-form');
  const formContainer = document.getElementById('form-container');
  const sucessoMensagem = document.getElementById('sucesso-mensagem');

  if (orcamentoForm) {
    orcamentoForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent page reload

      let isValid = true;

      // Define fields to validate
      const fields = [
        { id: 'nome', errorId: 'error-nome' },
        { id: 'whatsapp', errorId: 'error-whatsapp' },
        { id: 'cidade', errorId: 'error-cidade' },
        { id: 'hectares', errorId: 'error-hectares' },
        { id: 'cultura', errorId: 'error-cultura' }
      ];

      // Reset all errors first
      fields.forEach(field => {
        const errorEl = document.getElementById(field.errorId);
        const inputEl = document.getElementById(field.id);
        errorEl.style.display = 'none';
        inputEl.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      });

      // Validate
      fields.forEach(field => {
        const inputEl = document.getElementById(field.id);
        const errorEl = document.getElementById(field.errorId);
        
        if (!inputEl.value.trim()) {
          isValid = false;
          errorEl.style.display = 'block';
          inputEl.style.borderColor = '#ef4444'; // Red error border
        }
      });

      // If valid, show success message
      if (isValid) {
        // Hide form, show success
        formContainer.style.display = 'none';
        sucessoMensagem.classList.remove('hidden');
        sucessoMensagem.classList.add('fade-in-up', 'visible');
      }
    });
  }

});
