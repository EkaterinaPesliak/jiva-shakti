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
  document.querySelector(".header__nav-close").classList.remove("active")
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
