document.addEventListener('DOMContentLoaded', () => {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    document.querySelectorAll('.fade-in.visible').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    });
  }
});