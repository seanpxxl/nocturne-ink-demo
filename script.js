const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile-menu');

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.getElementById('consultation-form');
const successCard = document.getElementById('success-card');
const successSummary = document.getElementById('success-summary');
const whatsappLink = document.getElementById('whatsapp-link');
const emailLink = document.getElementById('email-link');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    const summary = `
      <p><strong>Name:</strong> ${payload.name || '-'}<br>
      <strong>Phone:</strong> ${payload.phone || '-'}<br>
      <strong>Email:</strong> ${payload.email || '-'}<br>
      <strong>Artist:</strong> ${payload.artist || '-'}<br>
      <strong>Style:</strong> ${payload.style || '-'}<br>
      <strong>Placement:</strong> ${payload.placement || '-'}<br>
      <strong>Size:</strong> ${payload.size || '-'}<br>
      <strong>Ink:</strong> ${payload.ink || '-'}<br>
      <strong>Date:</strong> ${payload.date || '-'}<br>
      <strong>Budget:</strong> ${payload.budget || '-'}<br>
      <strong>Idea:</strong> ${payload.idea || '-'}</p>
    `;
    successSummary.innerHTML = summary;

    const message = `New tattoo consultation%0A%0AName: ${encodeURIComponent(payload.name || '')}%0APhone: ${encodeURIComponent(payload.phone || '')}%0AEmail: ${encodeURIComponent(payload.email || '')}%0APreferred artist: ${encodeURIComponent(payload.artist || '')}%0AStyle: ${encodeURIComponent(payload.style || '')}%0APlacement: ${encodeURIComponent(payload.placement || '')}%0ASize: ${encodeURIComponent(payload.size || '')}%0AInk: ${encodeURIComponent(payload.ink || '')}%0APreferred date: ${encodeURIComponent(payload.date || '')}%0ABudget: ${encodeURIComponent(payload.budget || '')}%0AIdea: ${encodeURIComponent(payload.idea || '')}`;
    whatsappLink.href = `https://wa.me/919999999999?text=${message}`;

    const subject = encodeURIComponent(`New Tattoo Consultation — ${payload.name || 'Client'}`);
    const body = encodeURIComponent(`Name: ${payload.name || ''}
Phone: ${payload.phone || ''}
Email: ${payload.email || ''}
Preferred artist: ${payload.artist || ''}
Style: ${payload.style || ''}
Placement: ${payload.placement || ''}
Size: ${payload.size || ''}
Ink: ${payload.ink || ''}
Preferred date: ${payload.date || ''}
Budget: ${payload.budget || ''}
Idea: ${payload.idea || ''}`);
    emailLink.href = `mailto:hello@nocturneink.com?subject=${subject}&body=${body}`;

    successCard.classList.remove('hidden');
    successCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}
