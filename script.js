document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.mobile-menu');

  burger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
});
