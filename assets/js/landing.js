// Antwort Landing Page - Progressive Enhancement
// All content renders without this script. This adds:
// 1. Copy-to-clipboard buttons for code blocks
// 2. Scroll-based navigation style changes
// 3. Mobile menu toggle

(function () {
  'use strict';

  // --- Copy to Clipboard ---
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var codeBlock = btn.closest('.code-block') || btn.closest('.quickstart-step');
      var code = codeBlock ? codeBlock.querySelector('code') : null;
      if (!code) return;

      var text = code.textContent;
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      }).catch(function () {
        btn.textContent = 'Failed';
        setTimeout(function () {
          btn.textContent = 'Copy';
        }, 2000);
      });
    });
  });

  // --- Scroll-based Navigation ---
  var nav = document.getElementById('nav');
  if (nav) {
    var scrollThreshold = 50;

    function updateNav() {
      if (window.scrollY > scrollThreshold) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  // --- Mobile Menu Toggle ---
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('nav-menu-open');
    });

    // Close menu when a link is clicked
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('nav-menu-open');
      });
    });
  }

  // --- Fade-in on Scroll (Intersection Observer) ---
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('visible');
    });
  }
})();
