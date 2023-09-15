//Hero swiper

// const container = document.querySelector(".container")
const swiperHero = new Swiper('.hero__swiper-container', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }

})

//all swipers

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  loop: true,
});

//Burger

document.querySelector(".burger").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
  document.querySelector(".header__nav-close").classList.add("active");
  const body = document.querySelector('body')
  body.classList.toggle('unscroll');
})
document.querySelector(".header__nav-close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
  const body = document.querySelector('body')
  body.classList.remove("unscroll");
})

const links = document.querySelectorAll('.nav__link');

function handleClick() {
  document.querySelector(".header__nav").classList.remove("active");
  document.querySelector(".header__nav-close").classList.remove("active");
  const body = document.querySelector('body')
  body.classList.remove("unscroll");
}
links.forEach((link) => {
  link.addEventListener('click', handleClick);
});

// linkis.addEventListener("click", function() {
//   document.querySelector(".header__nav").classList.remove("active");
//   document.querySelector(".header__nav-close").classList.remove("active");
// })

// const swiperPractice = new Swiper('.practice__swiper', {
//   loop: true,
//   navigation: {
//       nextEl: '.practice__swiper-button-next',
//       prevEl: '.practice__swiper-button-prev',
//   },
//   pagination: {
//       el: '.practice__swiper-pagination',
//       clickable: true
//   },
  // breakpoints: {
  //   300: {
  //     slidesPerView: 1,
  //     spaceBetween: 38,
  //     slidesPerGroup: 1,
  // },
  //   700: {
  //     slidesPerView: 2,
  //     spaceBetween: 38,
  //     slidesPerGroup: 2,
  // },

  //     1000: {
  //         slidesPerView: 3,
  //         spaceBetween: 27,
  //         slidesPerGroup: 3,
  //     },
  //     1761: {
  //         slidesPerView: 3,
  //         spaceBetween: 50,
  //         slidesPerGroup: 3,
  //     },
  // }
// });

//Map

ymaps.ready(init);
function init() {
const mapElem = document.querySelector('#map');
const myMap = new ymaps.Map(
  "map",
  {
    center: [55.75846806898367, 37.60108849999989],
    zoom: 14,
    controls: [] /* Убираем элементы управления*/
  },
  {
    suppressMapOpenBlock: true, /* Убираем элементы управления*/
  }
);

myMap.behaviors.disable('scrollZoom');

const myPlacemark = new ymaps.Placemark(
  [55.75846806898367, 37.60108849999989],
  {},
  {
    iconLayout: "default#image",
    iconImageHref: "img/location.svg",
    iconImageSize: [40, 40],
    iconImageOffset: [-20, -40],
  }
);

myMap.geoObjects.add(myPlacemark);
myMap.container.fitToViewport();
}

// const container = document.querySelector(".container")
// const swiperHero = new Swiper('.hero__swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   // // autoplay: {
//   // //   delay: 3000
//   // },

//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   },
// })