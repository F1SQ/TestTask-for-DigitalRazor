const productsSlider = new Swiper('.products-slider', {
  // Optional parameters  
  loop: true,
  speed: 700,
  grabCursor: true,
  observer: true,
  effect: 'flip', 


  // Navigation arrows
  navigation: {
      nextEl: '.products-slider__button--next',
      prevEl: '.products-slider__button--prev',
    },
      keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  flipEffect: {
    slideShadows: true,
    limitRotation: true,
  },
  });


const menuBurger = document.querySelector('.header-top__burger');
if (menuBurger) {
    const hiddenMenu = document.querySelector('.hidden-menu');
    menuBurger.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock')
      menuBurger.classList.toggle('_active');
      hiddenMenu.classList.toggle('hidden-menu--visible');
    });
  }

