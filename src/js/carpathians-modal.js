(() => {
  const refs = {
    openCarpathiansModalBtn: document.querySelector(
      '[data-carpathians-modal-open]'
    ),
    closeCarpathiansModalBtn: document.querySelector(
      '[data-carpathians-modal-close]'
    ),
    carpathiansModal: document.querySelector('[data-carpathians-modal]'),
  };

  refs.openCarpathiansModalBtn.addEventListener('click', toggleModal);
  refs.closeCarpathiansModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.carpathiansModal.classList.toggle('is-hidden');

    if (refs.carpathiansModal.classList.contains('is-hidden')) {
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }
})();
