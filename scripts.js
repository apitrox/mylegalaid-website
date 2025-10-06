// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// FAQ toggle
document.querySelectorAll('.faq-q').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const item = this.closest('.faq-item');
    const expanded = this.getAttribute('aria-expanded') === 'true';
    // close others
    document.querySelectorAll('.faq-item').forEach(function(i) {
      if (i !== item) {
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      }
    });
    // toggle current
    item.classList.toggle('open');
    this.setAttribute('aria-expanded', (!expanded).toString());
  });
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
