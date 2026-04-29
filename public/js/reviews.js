const track = document.querySelector('.reviews__track');
const cards = document.querySelectorAll('.review-card');
const nextBtn = document.querySelector('.reviews__arrow--next');
const prevBtn = document.querySelector('.reviews__arrow--prev');

let index = 0;
const gap = 26;

// Detecta cuántas cards se ven según pantalla
function getVisibleCards() {
  return window.innerWidth <= 760 ? 1 : 3;
}

function updateCarousel() {
  const visibleCards = getVisibleCards();
  const maxIndex = Math.max(0, cards.length - visibleCards);

  if (index > maxIndex) {
    index = maxIndex;
  }

  const cardWidth = cards[0].offsetWidth + gap;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  const visibleCards = getVisibleCards();
  const maxIndex = cards.length - visibleCards;

  if (index < maxIndex) {
    index++;
  } else {
    index = 0; // vuelve al inicio
  }

  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  const visibleCards = getVisibleCards();
  const maxIndex = cards.length - visibleCards;

  if (index > 0) {
    index--;
  } else {
    index = maxIndex; // va al final
  }

  updateCarousel();
});

// Ajusta si cambian el tamaño de pantalla
window.addEventListener('resize', updateCarousel);