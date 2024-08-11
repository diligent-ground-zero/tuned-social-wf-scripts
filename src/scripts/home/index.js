import Swiper from 'swiper';
import { Manipulation, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

export const initSwipers = () => {
  initSpinningAdsSwiper();
  initTestimonialsSwiper();

  function initSpinningAdsSwiper() {
    const swiper = new Swiper('#loop-swiper-1-static, #loop-swiper-2-static', {
      spaceBetween: 40,
      grabCursor: true,
      a11y: false,
      freeMode: true,
      speed: 11000,
      loop: true,
      allowTouchMove: true,
      slidesPerView: 'auto',
      modules: [Autoplay],
      autoplay: {
        delay: 0.5,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          /* when window >=0px - webflow mobile landscape/portriat */ spaceBetween: 16,
        },
        480: {
          /* when window >=0px - webflow mobile landscape/portriat */ spaceBetween: 24,
        },
        767: {
          /* when window >= 767px - webflow tablet */ spaceBetween: 24,
        },
        992: {
          /* when window >= 988px - webflow desktop */ spaceBetween: 24,
        },
      },
    });

    const acceleratedSpeed = 2000; // Adjust this value as needed

    // Function to start accelerated scrolling
    function startScrolling() {
      swiper.params.speed = acceleratedSpeed;
      swiper.autoplay.start();
    }

    // Function to revert to normal scrolling speed
    function stopScrolling() {
      swiper.params.speed = 11000; // Original speed
      swiper.autoplay.start();
    }

    // Add event listeners
    const swiperContainer = document.querySelector('#loop-swiper-1-static, #loop-swiper-2-static');

    swiperContainer.addEventListener('mousedown', startScrolling);
    swiperContainer.addEventListener('mouseup', stopScrolling);
    swiperContainer.addEventListener('mouseleave', stopScrolling);

    swiperContainer.addEventListener('touchstart', startScrolling);
    swiperContainer.addEventListener('touchend', stopScrolling);
    swiperContainer.addEventListener('touchcancel', stopScrolling);
  }

  function initTestimonialsSwiper() {
    const swiper2 = new Swiper('#testimonials-slider', {
      slidesPerView: 'auto',
      speed: 1800,
      spaceBetween: 75,
      grabCursor: false,
      centeredSlides: true,
      pagination: {
        el: '.testimonials-pagination',
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      loop: true,
      modules: [Autoplay, Pagination],
      breakpoints: {
        1240: {
          spaceBetween: 75,
          slidesPerView: 2.5,
        },
      },
      autoplay: {
        delay: 5000, // Autoplay delay in milliseconds
        disableOnInteraction: true, // Disable autoplay on user interaction
      },
      allowTouchMove: false, // Prevent swiper from being swiped by user
    });
  }
};
