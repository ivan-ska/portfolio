document.addEventListener('DOMContentLoaded', function () {
  // === 1. Бургер-меню ===
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.mobile-menu');

  burger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  // === 2. IntersectionObserver для work-card ===
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  if (isTouchDevice()) {
    console.log('IntersectionObserver подключен');
    const cards = document.querySelectorAll('.work-card');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Добавляю visible к', entry.target);
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.5
    });

    cards.forEach(card => observer.observe(card));
  }

  // === 3. Скрытие шапки при скролле вниз, показ при скролле вверх ===
  let lastScrollTop = 0;
  const header = document.querySelector('.header');

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop && currentScroll > 150) {
        // Скролл вниз — прячем
        header.classList.add('header--hidden');
      } else {
        // Скролл вверх — показываем
        header.classList.remove('header--hidden');

        // === Закрываем мобильное меню при обратном скролле ===
        if (window.innerWidth <= 768 && menu.classList.contains('open')) {
          menu.classList.remove('open');
        }
      }

      lastScrollTop = currentScroll;
    });
  }
});
