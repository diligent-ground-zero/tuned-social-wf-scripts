import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';

export const initSwipers = () => {
  initSpinningAdsSwiper();
  initTestimonialsSwiper();
  initLogosSwiper();

  function initSpinningAdsSwiper() {
    new Swiper('#loop-swiper-1-static, #loop-swiper-2-static', {
      spaceBetween: 10,
      grabCursor: false,
      a11y: false,
      freeMode: false,
      speed: 7000,
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
      breakpoints: {
        1280: {
          spaceBetween: 15,
        },
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
        delay: 2500, // Autoplay delay in milliseconds
        pauseOnMouseEnter: true,
      },
      allowTouchMove: true,
    });
  }

  function initLogosSwiper() {
    const logoCarousels = document.querySelectorAll('.logo-carousel');

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

export const initCustomVideoControls = () => {
  const video = document.querySelector('video.vsl_video');
  if (!video) return;
  const playButton = document.querySelector('.vsl_video_play_button');
  if (!playButton) return;
  const playButtonIcon = playButton.querySelector('.play-icon');
  const pauseButtonIcon = playButton.querySelector('.pause-icon');

  if (!playButtonIcon || !pauseButtonIcon) return;

  let isPlaying = false;

  playButton.addEventListener('click', () => {
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    pauseButtonIcon.classList.toggle('hide');
    playButtonIcon.classList.toggle('hide');
    video.controls = !isPlaying;
    isPlaying = !isPlaying;
  });
};

export const initHeaderListeners = () => {
  const header = document.querySelector('.nav_component');
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateHeader = () => {
    const headerHeight = header.offsetHeight;
    if (window.scrollY > headerHeight) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateHeader();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', updateHeader);

  // Initial check
  updateHeader();
};

export const onMenuOpenListener = () => {
  const navButton = document.querySelector('.nav_button');
  if (!navButton) return;

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const isOpen = navButton.classList.contains('w--open');
        const header = document.querySelector('.nav_component');
        const navComponent = document.querySelector('.nav_component');
        if (isOpen && !header.classList.contains('scrolled')) {
          navComponent.classList.toggle('bg-white');
        } else {
          setTimeout(() => {
            navComponent.classList.remove('bg-white');
          }, 450);
        }
      }
    });
  });

  observer.observe(navButton, { attributes: true });
};
