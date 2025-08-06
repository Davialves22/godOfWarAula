//Script do carroussel
var swiper = new Swiper(".slide-characters", {
  slidesPerView: 3.5,
  spaceBetween: 19,
  freeMode: true,
  breakpoints: {
    //Resolução mobile
    320: {
      slidesPerView: 1.1,
    },

    //Resolução Ipad
    768: {
      slidesPerView: 2,
    },

    //Resolução Tablet
    991: {
      slidesPerView: 2.8,
    },

    //Resolução Default
    1200: {
      slidesPerView: 3.5,
    },
  },
});

AOS.init({
  //duração
  duration: 1000,
  
  //para evitar loop de animação
  once: true,
  
});
