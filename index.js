let currentSlide = 0;

setInterval(() => {
  currentSlide = (currentSlide + 1) % 3;
  document.querySelector(`#slide${currentSlide + 1}`).style.left = '0';
  document.querySelector(`#slide${(currentSlide + 2) % 3 + 1}`).style.left = '100%';
  document.querySelector(`#slide${(currentSlide + 1) % 3 + 1}`).style.left = '200%';
}, 3000); /* adjust the interval as needed */
