window.NOCTURNE_CONFIG = {
  brandName: "Nocturne Ink",
  city: "Chennai",
  country: "India",
  email: "hello@nocturneink.demo",
  whatsappNumber: "910000000000",
  whatsappMessage: "Hi Nocturne Ink, I want to book a tattoo consultation.",
  instagramUrl: "#",
  mapsUrl: "#",
  studioAddress: "Chennai, Tamil Nadu",
  bookingDepositNote: "Deposit amount depends on scope and session length.",
  siteUrl: "https://seanpxxl.github.io/nocturne-ink-demo/",
  demoMode: true,
  schemaEnabled: false
};

/* The demo is fictional, so remove LocalBusiness/TattooParlor structured data if older shared logic injects it. */
if (window.NOCTURNE_CONFIG.demoMode || !window.NOCTURNE_CONFIG.schemaEnabled) {
  window.setTimeout(() => document.querySelector('#studio-schema')?.remove(), 100);
  window.addEventListener('load', () => document.querySelector('#studio-schema')?.remove(), { once: true });
}
