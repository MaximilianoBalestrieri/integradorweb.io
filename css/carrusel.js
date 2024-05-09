let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.fotos img');
  
  if (n >= fotos.length) {
    slideIndex = 0;
  } 
  if (n < 0) {
    slideIndex = fotos.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  /* array que contiene las fotos   */
  }

  slides[slideIndex].style.display = 'flex';  
}