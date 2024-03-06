(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  const refForm = document.querySelector('.form');
  document
    .querySelector('.hero-form-btn')
    .addEventListener('click', onBtnSubmit);
  function onBtnSubmit(e) {
    e.preventDefault();
    const username = refForm.elements[0].value;
    username !== '' && alert(`${username} thank you for your application!`);
    refForm.reset();
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', closeModalOnBackdrop);
  document.addEventListener('keydown', closeModalOnEscape);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');

    if (refs.modal.classList.contains('is-hidden')) {
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }

  function closeModalOnBackdrop(e) {
    e.target === e.currentTarget && refs.modal.classList.add('is-hidden');
    refs.modal.classList.contains('is-hidden')
      ? (document.body.style.overflowY = 'auto')
      : (document.body.style.overflowY = 'hidden');
  }
  function closeModalOnEscape(e) {
    e.key === 'Escape' && refs.modal.classList.add('is-hidden');
    document.body.style.overflowY = 'auto';
  }
})();
