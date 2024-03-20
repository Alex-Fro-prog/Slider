let images = [{
  url: "../images/png/project1.png",
  title: "Rostov-on-Don, Admiral",
  city: "Rostov-on-Don LCD Admiral",
  area: "81 m2",
  time: "3,5 months",
  cost: "Upon request"
}, {
  url: "../images/png/project2.png",
  title: "Sochi Thieves",
  city: "Sochi Thieves",
  area: "105 m2",
  time: "4 months",
  cost: "Upon request"
}, {
  url: "../images/png/project3.png",
  title: "Rostov-on-Don Patriotic",
  city: "Rostov-on-Don Patriotic",
  area: "93 m2",
  time: "3 months",
  cost: "Upon request"
}];

function initSlider(options) {
if (!images || !images.length) return;

options = options || {
  dots: true,
  autoplay: false
};

let sliderImages = document.querySelector(".slider__images");
let sliderArrows = document.querySelector(".slider__arrows");
let sliderDots = document.querySelector(".slider__dots");
let sliderTitles = document.querySelector(".slider__titles");
let sliderCity = document.querySelector(".projects__card-city");
let sliderArea = document.querySelector(".projects__card-area");
let sliderTime = document.querySelector(".projects__card-time");
let sliderCost = document.querySelector(".projects__card-cost");

initImages();

if (options.dots) {
  initDots();
}

if (options.autoplay) {
  initAutoplay();
}

function initImages() {
  images.forEach((image, index) => {
    let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
    sliderImages.innerHTML += imageDiv;

    let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
    sliderDots.innerHTML += dot;

    let title = `<div class="slider__titles-item n${index} ${index === 0? "active" : ""}" data-index="${index}">${image.title}</div>`;
    sliderTitles.innerHTML += title;

    let city = `<p class="slider__city n${index} ${index === 0? "active" : ""}" data-index="${index}">${image.city}</p>`;
    sliderCity.innerHTML += city;

    let area = `<p class="slider__area n${index} ${index === 0? "active" : ""}" data-index="${index}">${image.area}</p>`;
    sliderArea.innerHTML += area;

    let time = `<p class="slider__time n${index} ${index === 0? "active" : ""}" data-index="${index}">${image.time}</p>`;
    sliderTime.innerHTML += time;

    let cost = `<p class="slider__cost n${index} ${index === 0? "active" : ""}" data-index="${index}">${image.cost}</p>`;
    sliderCost.innerHTML += cost;
  });
  initArrows();
  initTitles();
}

function initArrows() {
  sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
    arrow.addEventListener("click", function() {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber;
      if (arrow.classList.contains("left")) {
        nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
      } else {
        nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      }
      moveSlider(nextNumber);
    });
  });
}

function initDots() {
  sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
    dot.addEventListener("click", function() {
      moveSlider(this.dataset.index);
    })
  })
}

function initTitles() {
  sliderTitles.querySelectorAll(".slider__titles-item").forEach(title => {
    title.addEventListener("click", function() {
      moveSlider(this.dataset.index);
    })
  })
}


function moveSlider(num) {
  sliderImages.querySelector(".active").classList.remove("active");
  sliderImages.querySelector(".n" + num).classList.add("active");
  if (options.dots) {
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
  }
  sliderTitles.querySelector(".active").classList.remove("active");
  sliderTitles.querySelector(".n" + num).classList.add("active");
  sliderCity.querySelector(".active").classList.remove("active");
  sliderCity.querySelector(".n" + num).classList.add("active");
  sliderArea.querySelector(".active").classList.remove("active");
  sliderArea.querySelector(".n" + num).classList.add("active");
  sliderTime.querySelector(".active").classList.remove("active");
  sliderTime.querySelector(".n" + num).classList.add("active");
  sliderCost.querySelector(".active").classList.remove("active");
  sliderCost.querySelector(".n" + num).classList.add("active");
}

function initAutoplay() {
  setInterval(() => {
    let curNumber = +sliderImages.querySelector(".active").dataset.index;
    let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
    moveSlider(nextNumber);
  }, options.autoplayInterval);
}
}

let sliderOptions = {
dots: true,
autoplay: false,
autoplayInterval: 5000
};

document.addEventListener("DOMContentLoaded", function() {
initSlider(sliderOptions);
});