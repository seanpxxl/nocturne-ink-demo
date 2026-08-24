const phase3Styles = document.createElement('link');
phase3Styles.rel = 'stylesheet';
phase3Styles.href = 'phase3.css';
document.head.appendChild(phase3Styles);

const phase4Styles = document.createElement('link');
phase4Styles.rel = 'stylesheet';
phase4Styles.href = 'phase4.css';
document.head.appendChild(phase4Styles);

const phase6Styles = document.createElement('link');
phase6Styles.rel = 'stylesheet';
phase6Styles.href = 'phase6.css';
document.head.appendChild(phase6Styles);

const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/svg+xml';
favicon.href = 'favicon.svg';
document.head.appendChild(favicon);

const manifest = document.createElement('link');
manifest.rel = 'manifest';
manifest.href = 'site.webmanifest';
document.head.appendChild(manifest);

if (!document.querySelector('.skip-link')) {
  const skipLink = document.createElement('a');
  skipLink.className = 'skip-link';
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to content';
  document.body.prepend(skipLink);
  document.querySelector('main')?.setAttribute('id', 'main-content');
}

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
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
  whatsapp.setAttribute('aria-label', 'Chat with the studio on WhatsApp');
  whatsapp.innerHTML = '<span class="wa-dot"></span><span class="wa-label">WhatsApp studio</span>';
  document.body.appendChild(whatsapp);
}

if (!document.querySelector('.noise-overlay')) {
  const noise = document.createElement('div');
  noise.className = 'noise-overlay';
  noise.setAttribute('aria-hidden', 'true');
  document.body.appendChild(noise);
}

if (!document.querySelector('.mobile-bookbar')) {
  const bar = document.createElement('div');
  bar.className = 'mobile-bookbar';
  bar.innerHTML = '<a class="secondary" href="gallery.html">View work</a><a class="primary" href="booking.html">Book consultation</a>';
  document.body.appendChild(bar);
}

const galleryTiles = [...document.querySelectorAll('.gallery-tile')];
if (galleryTiles.length) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = '<button class="lightbox-close" aria-label="Close gallery preview">×</button><div class="lightbox-panel"><div class="lightbox-image"></div><div class="lightbox-copy"><span></span><h3></h3><p>Demo portfolio image. Production versions should use client-owned tattoo photography.</p></div></div>';
  document.body.appendChild(lightbox);

  const imageEl = lightbox.querySelector('.lightbox-image');
  const typeEl = lightbox.querySelector('.lightbox-copy span');
  const titleEl = lightbox.querySelector('.lightbox-copy h3');
  const close = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  galleryTiles.forEach(tile => {
    tile.setAttribute('tabindex', '0');
    tile.setAttribute('role', 'button');
    const open = () => {
      const img = tile.querySelector('.gallery-img');
      const caption = tile.querySelector('figcaption');
      imageEl.style.backgroundImage = getComputedStyle(img).backgroundImage;
      typeEl.textContent = caption?.querySelector('span')?.textContent || 'Selected work';
      titleEl.textContent = caption?.querySelector('strong')?.textContent || 'Tattoo study';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lightbox.querySelector('.lightbox-close')?.focus();
    };
    tile.addEventListener('click', open);
    tile.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
  });

  lightbox.querySelector('.lightbox-close').addEventListener('click', close);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

function ensureMeta(name, content, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(property ? 'property' : 'name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function applySiteConfig() {
  const config = window.NOCTURNE_CONFIG;
  if (!config) return;

  const waText = encodeURIComponent(config.whatsappMessage || 'Hi, I want to book a tattoo consultation.');
  const waUrl = `https://wa.me/${config.whatsappNumber}?text=${waText}`;

  document.querySelectorAll('a[href*="wa.me/"]').forEach(link => { link.href = waUrl; });

  const floatingWhatsapp = document.querySelector('.floating-whatsapp');
  if (floatingWhatsapp) {
    floatingWhatsapp.href = waUrl;
    floatingWhatsapp.setAttribute('aria-label', `Chat with ${config.brandName} on WhatsApp`);
  }

  document.querySelectorAll('a[href^="mailto:"]').forEach(link => { link.href = `mailto:${config.email}`; });
  document.querySelectorAll('form[action^="mailto:"]').forEach(form => { form.action = `mailto:${config.email}`; });

  document.querySelectorAll('.brand-copy strong, .footer-brand strong').forEach(el => {
    el.textContent = config.brandName.toUpperCase();
  });

  document.querySelectorAll('.brand-copy small').forEach(el => {
    el.textContent = `INK · ${config.city.toUpperCase()}`;
  });

  const currentPath = location.pathname.split('/').pop() || 'index.html';
  const pageUrl = new URL(currentPath === 'index.html' ? './' : currentPath, config.siteUrl).href;

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = pageUrl;

  ensureMeta('og:url', pageUrl, true);
  ensureMeta('og:site_name', config.brandName, true);
  ensureMeta('twitter:card', 'summary_large_image');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TattooParlor',
    name: config.brandName,
    url: config.siteUrl,
    email: config.email,
    telephone: config.whatsappNumber ? `+${config.whatsappNumber}` : undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.studioAddress,
      addressLocality: config.city,
      addressCountry: config.country
    },
    sameAs: config.instagramUrl && config.instagramUrl !== '#' ? [config.instagramUrl] : []
  };

  let schemaTag = document.querySelector('#studio-schema');
  if (!schemaTag) {
    schemaTag = document.createElement('script');
    schemaTag.id = 'studio-schema';
    schemaTag.type = 'application/ld+json';
    document.head.appendChild(schemaTag);
  }
  schemaTag.textContent = JSON.stringify(schema);
}

const configScript = document.createElement('script');
configScript.src = 'site-config.js';
configScript.onload = applySiteConfig;
document.head.appendChild(configScript);
