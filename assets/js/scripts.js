// code of home page

// function scrollIntoView() {
//   const bottomElement = document.getElementById('bottom');
//   bottomElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
// }
  
  // code of cube 
  const slides = document.querySelectorAll('.slide');

  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      const imageSrc = slide.querySelector('img').getAttribute('src');
      window.open(imageSrc, '_blank');
    });
  });
  