// First Slide start

$(document).ready(function () {
  $(".btn").click(function () {
    $(".carusel").fadeToggle(150);
    $(".carusel2").fadeToggle(150);
  });
  let scroll=0;
  $(".filter_btn_next").click(()=>{
    scroll+=500
    $(".filter_boxes").scrollLeft(scroll)
  })
  $(".filter_btn_prew").click(()=>{
    scroll-=500
    $(".filter_boxes").scrollLeft(scroll)
  })

  
});

// First Slide end

//modal start

const modal = document.querySelector(".modal");
let loginButton = document.querySelector(".loginButton");

loginButton.addEventListener("click", () => {
  modal.classList.toggle("modalClick");
});


let products=[
  {name:"Cashmere Tank + Bag",price:99,oldPrice:120,pic:"./images/latest1.jpg",category:"men"},
  {name:"Cashmere Tank + Bag",price:99,oldPrice:120,pic:"./images/latest2.jpg",category:"women"},
  {name:"Cashmere Tank + Bag",price:99,oldPrice:120,pic:"./images/latest3.jpg",category:"baby"},
  {name:"Cashmere Tank + Bag",price:99,oldPrice:120,pic:"./images/latest1.jpg",category:"men"},
  {name:"Cashmere Tank + Bag",price:99,oldPrice:120,pic:"./images/latest2.jpg",category:"women"},
  {name:"Cashmere Tank + Bag",price:99,oldPrice:120,pic:"./images/latest3.jpg",category:"baby"},
  {name:"Cashmere Tank + Bag",price:99,oldPrice:120,pic:"./images/latest1.jpg",category:"men"},
  {name:"Cashmere Tank + Bag",price:99,oldPrice:120,pic:"./images/latest2.jpg",category:"women"},
  {name:"Cashmere Tank + Bag",price:99,oldPrice:120,pic:"./images/latest1.jpg",category:"men"},
  {name:"Cashmere Tank + Bag",price:99,oldPrice:120,pic:"./images/latest3.jpg",category:"baby"},
  {name:"Cashmere Tank + Bag",price:99,oldPrice:120,pic:"./images/latest2.jpg",category:"women"},
  {name:"Cashmere Tank + Bag",price:99,oldPrice:120,pic:"./images/latest3.jpg",category:"baby"},
  {name:"Cashmere Tank + Bag",price:99,oldPrice:120,pic:"./images/latest2.jpg",category:"women"},
  {name:"Cashmere Tank + Bag",price:99,oldPrice:120,pic:"./images/latest3.jpg",category:"baby"},
];
products.forEach(product => {
  let boxes=document.querySelector(".filter_boxes")
  boxes.innerHTML+=`   
  <div class="filter_box">
    <img src="${product.pic}" alt="">
    <p class="about_filterBox">${product.name}</p>
    <p class="price_filterBox">$${product.price} <del>$${product.oldPrice}</del></p>
  </div>`
});