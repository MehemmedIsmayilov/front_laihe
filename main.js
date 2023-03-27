// First Slide start

$(document).ready(function () {
  $(".btn").click(function () {
    $(".carusel").fadeToggle(150);
    $(".carusel2").fadeToggle(150);
  });
});

//modal start

const modal = document.querySelector(".modal");
let loginButton = document.querySelector(".loginButton");

loginButton.addEventListener("click", () => {
  modal.classList.toggle("modalClick");
});

//filter slide start
let products = [
  {
    name: "Cashmere Tank + Bag",
    price: 99,
    oldPrice: 120,
    pic: "./images/latest1.jpg",
    category: "men",
  },
  {
    name: "Cashmere Tank + Bag",
    price: 99,
    oldPrice: 120,
    pic: "./images/latest2.jpg",
    category: "women",
  },
  {
    name: "Cashmere Tank + Bag",
    price: 99,
    oldPrice: 120,
    pic: "./images/latest3.jpg",
    category: "baby",
  },
  {
    name: "Cashmere Tank + Bag",
    price: 99,
    oldPrice: 120,
    pic: "./images/latest1.jpg",
    category: "men",
  },
  {
    name: "Cashmere Tank + Bag",
    price: 99,
    oldPrice: 120,
    pic: "./images/latest2.jpg",
    category: "women",
  },
  {
    name: "Cashmere Tank + Bag",
    price: 99,
    oldPrice: 120,
    pic: "./images/latest3.jpg",
    category: "baby",
  },
  {
    name: "Cashmere Tank + Bag",
    price: 99,
    oldPrice: 120,
    pic: "./images/latest1.jpg",
    category: "men",
  },
  {
    name: "Cashmere Tank + Bag",
    price: 99,
    oldPrice: 120,
    pic: "./images/latest2.jpg",
    category: "women",
  },
  {
    name: "Cashmere Tank + Bag",
    price: 99,
    oldPrice: 120,
    pic: "./images/latest1.jpg",
    category: "men",
  },
  {
    name: "Cashmere Tank + Bag",
    price: 99,
    oldPrice: 120,
    pic: "./images/latest3.jpg",
    category: "baby",
  },
  {
    name: "Cashmere Tank + Bag",
    price: 99,
    oldPrice: 120,
    pic: "./images/latest2.jpg",
    category: "women",
  },
  {
    name: "Cashmere Tank + Bag",
    price: 99,
    oldPrice: 120,
    pic: "./images/latest3.jpg",
    category: "baby",
  },
  {
    name: "Cashmere Tank + Bag",
    price: 99,
    oldPrice: 120,
    pic: "./images/latest2.jpg",
    category: "women",
  },
  {
    name: "Cashmere Tank + Bag",
    price: 99,
    oldPrice: 120,
    pic: "./images/latest3.jpg",
    category: "baby",
  },
];
products.forEach((product) => {
  let boxes = document.querySelector(".filter_boxes");
  boxes.innerHTML += `   
  <div class="filter_box">
    <img src="${product.pic}" alt="">
    <p class="about_filterBox">${product.name}</p>
    <p class="price_filterBox">$${product.price} <del>$${product.oldPrice}</del></p>
  </div>`;
});

let scroll = 0;
$(".filter_btn_next").click(() => {
  scroll += 1400;
  $(".filter_boxes").scrollLeft(scroll);
});
$(".filter_btn_prew").click(() => {
  scroll -= 1400;
  $(".filter_boxes").scrollLeft(scroll);
});

//filter slide end

// search section start

const search = document.querySelector(".search_input");
const searchClick = document.querySelector(".searchClick");
const searchX = document.querySelector(".searchX");
searchX.addEventListener("click", () => {
  search.style.display = "none";
});
searchClick.addEventListener("click", () => {
  search.classList.toggle("search_block");
  searchX.classList.toggle("searchXX");
  search.style.display = "block";
});

// search section end

//About slide start

const aboutSlidePrew = document.querySelector(".aboutSlidePrew");
const aboutSlideNext = document.querySelector(".aboutSlideNext");
const about_slide = document.querySelector(".about_slide");

aboutSlideNext.addEventListener("click", () => {
  about_slide.classList.toggle("about_slide_animationNext");
});

aboutSlidePrew.addEventListener("click", () => {
  about_slide.classList.toggle("about_slide_animationPrew");
});

//About slide end
let like_filter = [
  {
    img: "./images/latest5.jpg",
    price: 98,
    old_price: 130,
  },
  {
    img: "./images/latest6.jpg",
    price: 50,
    old_price: 80,
  },
  {
    img: "./images/latest7.jpg",
    price: 70,
    old_price: 90,
  },
  {
    img: "./images/latest8.jpg",
    price: 99.99,
    old_price: 100,
  },
  {
    img: "./images/latest6.jpg",
    price: 250,
    old_price: 251,
  },
  {
    img: "./images/latest7.jpg",
    price: 5,
    old_price: 85,
  },
];

let like_slide_boxes = document.querySelector(".like_slide_boxes");
like_filter.forEach((item) => {
  like_slide_boxes.innerHTML += `
  <div class="like_slide_box">
  <div class="like_img">
  <img src="${item.img}" alt="" />
  <div class="like_img_buttons">
    <i class="like_icon fa-solid fa-cart-plus"></i>
    <i class="like_icon fa-solid fa-heart"></i>
    <i class="like_icon fa-solid fa-magnifying-glass"></i>
  </div>
</div>
<p class="like_box_about">Chasmere Tank + Bag</p>
<p class="like_box_price">$${item.price}  <del>$${item.old_price}</del></p>
</div>`;
});

let like_slide_prew = document.querySelector(".like_slide_prew");
let like_slide_next = document.querySelector(".like_slide_next");

let index = like_filter.length-1;

let restart = like_filter[0];
like_slide_prew.addEventListener("click", () => {
  scroll -= 350;
  like_slide_boxes.scrollLeft = scroll;
});
like_slide_next.addEventListener("click", () => {
  scroll += 350;
  like_slide_boxes.scrollLeft = scroll;
  if ((like_filter.length = index)) {
    restart;
  } else if ((like_filter.length = restart)) {
    restart++;
  }
});

// $(".like_slide_next").click(()=>{
//   scroll+=350;
//   $(".like_slide_boxes").scrollLeft(scroll)
// });
//  $(".filter_btn_next").click(() => {
//   scroll += 1400;
//   $(".filter_boxes").scrollLeft(scroll);
// });
// $(".filter_btn_prew").click(() => {
//   scroll -= 1400;
//   $(".filter_boxes").scrollLeft(scroll);
// });
