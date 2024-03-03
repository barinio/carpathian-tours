(() => {
  const refs = {
    openHoverlaModalBtn: document.querySelector('[data-hoverla-modal-open]'),
    closeHoverlaModalBtn: document.querySelector('[data-hoverla-modal-close]'),
    hoverlaModal: document.querySelector('[data-hoverla-modal]'),
  };

  refs.openHoverlaModalBtn.addEventListener('click', toggleModal);
  refs.closeHoverlaModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.hoverlaModal.classList.toggle('is-hidden');

    if (refs.hoverlaModal.classList.contains('is-hidden')) {
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }
})();
