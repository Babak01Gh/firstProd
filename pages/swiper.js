import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';
const swiperAdder = () => {
    const swiper = new Swiper('.swiperSeeAlso', {
        direction: 'horizontal',
        loop: false,
    
        breakpoints: {
            1200: {
              slidesPerView: 4.1,
              spaceBetween: 20
            },
            920: {
                slidesPerView: 3.1,
                spaceBetween: 20
            },
            600: {
                slidesPerView: 2.1,
                spaceBetween: 20
            },
            430: {
              slidesPerView: 1.5,
              spaceBetween: 20
          },
            50:{
                slidesPerView: 1.06,
                spaceBetween: 10
            }
        },
        // Navigation arrows
        navigation: {
          nextEl: '.btnNext',
          prevEl: '.btnPrev',
        }
      });
}

export default swiperAdder