document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenuToggle.setAttribute('aria-expanded', mobileMenu.classList.contains('hidden') ? 'false' : 'true');
  });

  mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
  });

  document.querySelectorAll('nav a, #mobile-menu a, a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        anchor.classList.add('active');
      }
    });
  });

  const sections = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(section => observer.observe(section));

  if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookies-banner').classList.remove('hidden');
  }
});

function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  document.getElementById('cookies-banner').classList.add('hidden');
}

function submitQuiz() {
  const arr = parseFloat(document.getElementById('arr').value);
  const burn = parseFloat(document.getElementById('burn-rate').value);
  const email = document.getElementById('quiz-email').value;
  if (!arr || !burn || burn <= 0 || !email) {
    alert('Please enter valid numbers and an email.');
    return;
  }
  console.log(`Sending VC readiness report to ${email}: ARR $${arr}, Burn $${burn}`);
  alert('Your VC readiness report has been sent!');
}