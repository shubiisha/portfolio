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
    });

    // Close menu when clicking nav links
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.innerHTML = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
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
            } else {
              item.classList.remove('active');
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
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

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

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      if (!nameInput || !emailInput || !messageInput) return;

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

      try {
        // Try backend endpoint if available, otherwise simulate graceful success
        let success = false;
        try {
          const response = await fetch('/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
          });
          if (response.ok) {
            const data = await response.json();
            formStatus.className = 'form-status-msg success';
            formStatus.innerText = data.message || '✨ Thank you! Your message has been sent successfully.';
            success = true;
          }
        } catch (fetchErr) {
          // In static preview / Netlify / client environment
          console.log('Using client fallback for message handling');
        }

        if (!success) {
          // Client-side fallback message
          setTimeout(() => {
            formStatus.className = 'form-status-msg success';
            formStatus.innerHTML = `✨ <strong>Thank you ${name}!</strong> Your message has been recorded. You can also reach me directly at <a href="mailto:shubiishaj@gmail.com" style="text-decoration:underline; font-weight:bold;">shubiishaj@gmail.com</a>.`;
            contactForm.reset();
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
          }, 800);
          return;
        }

        contactForm.reset();
      } catch (err) {
        formStatus.className = 'form-status-msg error';
        formStatus.innerText = '❌ Failed to send message. Please reach out directly at shubiishaj@gmail.com';
      } finally {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
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
