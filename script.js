const phase3Styles = document.createElement('link');
phase3Styles.rel = 'stylesheet';
phase3Styles.href = 'phase3.css';
document.head.appendChild(phase3Styles);

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const header = document.querySelector('.site-header');
const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal, .page-hero .reveal').forEach(el => el.classList.add('visible'));
});

if (!document.querySelector('.floating-whatsapp')) {
  const whatsapp = document.createElement('a');
  whatsapp.className = 'floating-whatsapp';
  whatsapp.href = 'https://wa.me/910000000000';
  whatsapp.target = '_blank';
  whatsapp.rel = 'noreferrer';
  whatsapp.setAttribute('aria-label', 'Chat with Nocturne Ink on WhatsApp');
  whatsapp.innerHTML = '<span class="wa-dot"></span><span class="wa-label">WhatsApp studio</span>';
  document.body.appendChild(whatsapp);
}