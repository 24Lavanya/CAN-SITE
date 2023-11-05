// let burger=document.querySelector(".burger");
// let navbar=document.querySelector(".navbar")
// let right=document.querySelector(".right")
// let left=document.querySelector(".left")
// burger.addEventListener('click',()=>{
//     right.classList.toggle('notvis')
//     left.classList.toggle('notvis')
//     navbar.classList.toggle('resp-nav')
//     navbar.classList.toggle('resp-nav-style')
// })


// // 
// let countone=document.querySelector(".count1").value;
// let counttwo=document.querySelector(".count2").value;
// let countthree=document.querySelector(".count3").value;
// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration) {
//      let obj = document.getElementById('#count'),
//       current = start,
//       range = end - start,
//       increment = end > start ? 1 : -1,
//       step = Math.abs(Math.floor(duration / range)),
//       timer = setInterval(() => {
//        current += increment;
//        obj.textContent = current;
//        if (current == end) {
//         clearInterval(timer);
//        }
//       }, step);
//     }
//     counter(countone, 0, 400, 3000);
//     counter(counttwo, 100, 50, 2500);
//     counter(countthree, 0, 40, 3000);
//    });

// const container = document.querySelector(".people-container");
// const slides = document.querySelectorAll(".people-box");
// console.log(slides);
// let count = 0;
// slides.forEach((slide, i) => {
//   let val = (slide.style.left = ${i * 101}%);
//   console.log(val);
// });
// const goPrev = () => {
//   count--;
//   console.log("yes");
//   slideShow();
// };
// const goNext = () => {
//   count++;
//   console.log("yes");
//   slideShow();
// };
// const slideShow = () => {
//   console.log("yay");
//   slides.forEach((slide) => {
//     count = count === slides.length ? 0 : count < 0 ? slides.length - 1 : count;
//     slide.style.transform = translateX(-${count * 101}%);
//   });
// };
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