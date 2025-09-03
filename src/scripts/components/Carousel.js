import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 0,
      direction: "vertical",
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        type: 'bullets',
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };
    this.init();
  }

  setOptions() {
    if ('split' in this.element.dataset) {
      this.options.breakpoints = {
          768: {
            slidesPerView: 2.5,
          },
      };
      this.options.loop = {
        loop: true,
      }
    }

    if('autoplay' in this.element.dataset){
      this.options.autoplay = {
       delay: 3000,
       pauseOnMouseEnter: true,
       disableOnInteraction: false,
      };
    }

    if('slides' in this.element.dataset){
      const slides = parseInt(this.element.dataset.slides, 10) || this.options.slidesPerView;
      this.options.slidesPerView = slides;
    }

    /*if('navigation' in this.element.dataset) {
      this.options.navigation = {
        nextEl: false,
        prevEl: false,
      };
    }

    if('pagination' in this.element.dataset) {
      this.options.pagination = {
        el: false,
      };
    }*/
  }

  init() {
    this.setOptions();
    console.log('Initialisation de ma composante Carousel');
    new Swiper(this.element, this.options);
  }
}
