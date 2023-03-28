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
  <p class="category-filter">${product.category}</p>
    <img src="${product.pic}" alt="">
    <p class="about_filterBox">${product.name}</p>
    <p class="price_filterBox">$${product.price} <del>$${product.oldPrice}</del></p>
    <button class="basket">Add To Basket</button>

  </div>`;
});

let filterBoxes = document.querySelectorAll(".filter_box");
let filterButtons = document.querySelectorAll(".filter_btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterBoxes.forEach((box) => {
      let category = box.children[0];

      if (
        category.innerHTML.toUpperCase() != button.dataset.filter.toUpperCase()
      ) {
        category.parentElement.style.display = "none";
        // category=null;
        // console.log(box)
      }
      if (
        category.innerHTML.toUpperCase() == button.dataset.filter.toUpperCase()
      ) {
        category.parentElement.style.display = "block";
      }
      if (button.dataset.filter == "all") {
        category.parentElement.style.display = "block";
      }
    });
  });
});
// basket.addEventListener("click", () => {
//   const header_addToCart=document.querySelector(".header_addToCart")
//   let count = 0;
//   const sebet = document.querySelector(".sebet");
//   count++;
//   header_addToCart.innerHTML += `<sup>${count}1</sup>`;
// });

let scroll = 0;
$(".filter_btn_next").click(() => {
  scroll += 1400;
  $(".filter_boxes").scrollLeft(scroll);
});
$(".filter_btn_prew").click(() => {
  scroll -= 1400;
  $(".filter_boxes").scrollLeft(scroll);
});

const men = document.querySelector(".men");
// let exam=men.addEventListener("click",()=>{
//   products.category="men";

// })
// console.log({exam})
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
  <img src="${item.img}" alt="" class="js_img"/>
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

let index = 0;
like_slide_prew.addEventListener("click", () => {
  scroll -= 350;
  like_slide_boxes.scrollLeft = scroll;
});
like_slide_next.addEventListener("click", () => {
  scroll += 350;
  like_slide_boxes.scrollLeft = scroll;
  if (index == like_filter.length - 1) {
    index = 0;
  } else if ((like_filter.length = restart)) {
    index++;
  }
});

let indexx = 0;

like_slide_next.addEventListener("click", () => {
  js_img.setAttribute("src", `./images/${like_filter[index]}`);
  if (index == arr.length - 1) {
    index = 0;
  } else {
    index++;
  }
});

// up buttons
let up = document.querySelector(".up");
let body = document.querySelector("body");
let scrollup = 0;

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
}
up.addEventListener("click", function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});





