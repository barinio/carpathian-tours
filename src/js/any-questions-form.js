const refForm = document.querySelector('.questions-form');
document
  .querySelector('.btn-questions-form')
  .addEventListener('click', onBtnSubmit);

function onBtnSubmit(e) {
  e.preventDefault();
  const username = refForm.elements[0].value;
  username !== '' && alert(`${username} thank you for your question!`);
  refForm.reset();
}
