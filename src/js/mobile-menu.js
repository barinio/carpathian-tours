(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const heroConten = document.querySelector('.hero-content');
  const header = document.querySelector('.header');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    if (!isMenuOpen) {
      heroConten.classList.add('is-hidden');
      header.classList.add('is-hidden');
    } else {
      heroConten.classList.remove('is-hidden');
      header.classList.remove('is-hidden');
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    heroConten.classList.remove('is-hidden');
    header.classList.remove('is-hidden');
  });
})();
