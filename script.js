/**
 * Shubiisha J - Developer Portfolio
 * Interactive JavaScript for UI/UX & Responsive Behaviors
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation menu' : 'Open navigation menu'
      );
    });

    // Close menu when clicking nav links
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.innerHTML = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.setAttribute('aria-label', 'Open navigation menu');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        mobileToggle.innerHTML = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.setAttribute('aria-label', 'Open navigation menu');
        mobileToggle.focus();
      }
    });
  }

  // 2. Header Scroll Glassmorphism Effect
  const siteHeader = document.getElementById('siteHeader');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    });
  }

  // 3. Navigation Active Link Spy on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length > 0 && navItems.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navItems.forEach(item => {
            const href = item.getAttribute('href').substring(1);
            if (href === currentId) {
              item.classList.add('active');
              item.setAttribute('aria-current', 'location');
            } else {
              item.classList.remove('active');
              item.removeAttribute('aria-current');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }

  // 4. Interactive Skill Filter Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card-modern');

  if (filterBtns.length > 0 && skillCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const filterValue = btn.getAttribute('data-filter');

        skillCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.4s ease forwards';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 5. Interactive Contact Form with Validation & Feedback
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      formStatus.className = 'form-status-msg';
      formStatus.textContent = '';

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      if (!nameInput || !emailInput || !messageInput || !submitBtn) return;

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        formStatus.className = 'form-status-msg error';
        formStatus.innerText = '⚠️ Please fill in all required fields.';
        return;
      }

      // Visual sending state
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Sending Message... ⏳</span>';
      submitBtn.disabled = true;
      contactForm.setAttribute('aria-busy', 'true');

      try {
        const config = window.EMAILJS_CONFIG;
        if (
          !config?.serviceId ||
          !config?.templateId ||
          !config?.publicKey ||
          !window.emailjs?.sendForm
        ) {
          throw new Error('EmailJS is not configured.');
        }

        await window.emailjs.sendForm(
          config.serviceId,
          config.templateId,
          contactForm,
          { publicKey: config.publicKey }
        );

        formStatus.className = 'form-status-msg success';
        formStatus.innerText = '✨ Thank you! Your message has been sent successfully.';
        contactForm.reset();
      } catch (err) {
        formStatus.className = 'form-status-msg error';
        formStatus.innerText =
          err.message === 'EmailJS is not configured.'
            ? '❌ The contact form is not configured. Please email shubiisha23@gmail.com directly.'
            : '❌ Failed to send your message. Please email shubiisha23@gmail.com directly.';
        console.error('EmailJS contact form error:', err);
      } finally {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        contactForm.removeAttribute('aria-busy');
      }
    });
  }

  // 6. Smooth Scroll for "Back to Top" button
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

// Helper function to navigate to project pages
function openProject(url) {
  if (url) {
    window.location.href = url;
  }
}
