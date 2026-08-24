(() => {
  const controls = [...document.querySelectorAll('[data-gallery-filter]')];
  const tiles = [...document.querySelectorAll('.gallery-tile[data-category]')];
  const status = document.querySelector('.gallery-filter-status');
  if (!controls.length || !tiles.length) return;

  const applyFilter = (filter) => {
    let visible = 0;
    tiles.forEach(tile => {
      const matches = filter === 'all' || tile.dataset.category === filter;
      tile.classList.toggle('is-filtered-out', !matches);
      tile.setAttribute('aria-hidden', String(!matches));
      if (matches) visible += 1;
    });

    controls.forEach(button => {
      const active = button.dataset.galleryFilter === filter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    if (status) status.textContent = `${visible} ${visible === 1 ? 'piece' : 'pieces'}`;
  };

  controls.forEach(button => {
    button.addEventListener('click', () => applyFilter(button.dataset.galleryFilter || 'all'));
  });
})();
