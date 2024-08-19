import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';

export const initSwipers = () => {
  initSpinningAdsSwiper();
  initTestimonialsSwiper();
  initLogosSwiper();

  function initSpinningAdsSwiper() {
    new Swiper('#loop-swiper-1-static, #loop-swiper-2-static', {
      spaceBetween: 40,
      grabCursor: false,
      a11y: false,
      freeMode: false,
      speed: 6000,
      centeredSlides: true,
      loop: true,
      allowTouchMove: false,
      slidesPerView: 'auto',
      modules: [Autoplay],
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
    });
  }

  function initTestimonialsSwiper() {
    new Swiper('#testimonials-slider', {
      slidesPerView: 'auto',
      speed: 1500,
      spaceBetween: 50,
      grabCursor: true,
      modules: [Autoplay, Pagination],
      pagination: {
        el: '.testimonials-pagination',
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        clickable: true,
      },
      breakpoints: {
        1280: {
          spaceBetween: 100,
          slidesPerView: 'auto',
        },
      },
      autoplay: {
        delay: 3500, // Autoplay delay in milliseconds
      },
      allowTouchMove: true,
    });
  }

  function initLogosSwiper() {
    const logoCarousels = document.querySelectorAll('#ed');

    logoCarousels.forEach((carousel, index) => {
      new Swiper(carousel, {
        slidesPerView: '1',
        loop: true,
        speed: 3000,
        breakpoints: {
          275: {
            slidesPerView: '1.5',
            spaceBetween: 20,
          },
          325: {
            slidesPerView: '2',
            spaceBetween: 20,
          },
          400: {
            slidesPerView: '2.5',
            spaceBetween: 20,
          },
          500: {
            slidesPerView: '3',
            spaceBetween: 20,
          },
          600: {
            slidesPerView: '3.5',
            spaceBetween: 20,
          },
        },
        modules: [Autoplay],
        autoplay: {
          delay: 0,
        },
      });
    });
  }
};
