const refs = {
  modal: document.querySelector('[data-modal]'),
  tourBackdrop: document.querySelectorAll('.tour-backdrop'),
  submitBtn: document.querySelector('.hero-form-btn'),

  bookTourBtn: document.querySelectorAll('[data-tour-modal-close]'),
};

refs.submitBtn.addEventListener('click', toggleClassHidden);
refs.bookTourBtn.forEach(e => {
  e.addEventListener('click', toggleClassHidden);
});

function toggleClassHidden(e) {
  e.preventDefault();
  refs.modal.classList.toggle('is-hidden');

  refs.tourBackdrop.forEach(e => {
    e.classList.add('is-hidden');
  });

  if (refs.modal.classList.contains('is-hidden')) {
    document.body.style.overflowY = 'auto';
  } else {
    document.body.style.overflowY = 'hidden';
  }
}
