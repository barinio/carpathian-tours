(() => {
  const refs = {
    openBukovelModalBtn: document.querySelector('[data-bukovel-modal-open]'),
    closeBukovelModalBtn: document.querySelector('[data-bukovel-modal-close]'),
    bukovelModal: document.querySelector('[data-bukovel-modal]'),
  };

  refs.openBukovelModalBtn.addEventListener('click', toggleModal);
  refs.closeBukovelModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.bukovelModal.classList.toggle('is-hidden');

    if (refs.bukovelModal.classList.contains('is-hidden')) {
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }
})();
