const modal = document.querySelector('.modal');
const modalButton = document.querySelectorAll('.modal_button');
const closeButton = document.querySelector('.close_img');
const body = document.querySelector('.body');
const html = document.querySelector('html');

modalButton.forEach(el => {
  el.addEventListener('click', () => {
    modal.style.display = 'initial';
    body.classList.add('noscroll');
    html.classList.add('fixed_html');
  });
});

modal.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal_container');

  if (!isModal) {
    modal.style.display = 'none';
    body.classList.remove('noscroll');
    html.classList.remove('fixed_html');
  }
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
  body.classList.remove('noscroll');
  html.classList.remove('fixed_html');
});