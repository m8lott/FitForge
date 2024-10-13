let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
  changeSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
  changeSlide(currentSlide - 1);
});

function changeSlide(index) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (index + totalSlides) % totalSlides;
  slides[currentSlide].style.display = 'block';
}


// Initialize first slide
slides[currentSlide].style.display = 'block';
