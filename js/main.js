new Splide( '#slider1' ).mount(); 
new Splide( '#slider2', {
  type   : 'loop',
  perPage: 3,
  perMove: 1,
  breakpoints: {
    600: {
      perPage: 2,
      height : '6rem',
      
    },
    320: {
      perPage: 1,
      height : '12rem',
      width: '20rem'
    },
  },
}).mount();
new Splide( '#slider3', {
  type   : 'loop',
  perPage: 3,
  perMove: 1,
  rewind : true,
  breakpoints: {
    600: {
      perPage: 2,
      height : '6rem',
    },
    320: {
      perPage: 1,
      height : '3rem',
    },
  },
}).mount();
new Splide( '#slider4', {
  type   : 'loop',
  perPage: 3,
  perMove: 1,
  rewind : true,
  breakpoints: {
    1200: {
      perPage: 2,
      height : '6rem',
    },
    600: {
      perPage: 1,
      height : '12rem',
    },
  },
}).mount();

let FaqItem = document.querySelectorAll('.FAQ__item');
let gaqPluse = document.querySelectorAll('.FAQ__item-pluse');

gaqPluse.forEach((el, index) => {
  el.addEventListener('click', () => {
    FaqItem.forEach((item, itemIndex) => {
      if (itemIndex === index) {
        item.classList.toggle('active'); 
      } else {
        item.classList.remove('active'); 
      }
    });
  });
});


