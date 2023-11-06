const courseBox = document.querySelector(".course-box");
const slideBox = document.querySelectorAll(".course-box-box");
// console.log(slideBox);
let count = 0;
slideBox.forEach((slide, i) => {
  let val = `(slide.style.left = ${i * 101}%)`;
  console.log(val);
});
const goPrev = () => {
  count--;
  console.log("yes");
  slideShow();
};
const goNext = () => {
  count++;
  console.log("yes");
  slideShow();
};
const slideShow = () => {
  console.log("yay");
  slideBox.forEach((slide) => {
    count = count === slideBox.length ? 0 : count < 0 ? slideBox.length - 1 : count;
    slide.style.transform = `translateX(-${count * 101}%)`;
  });
};


//slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});