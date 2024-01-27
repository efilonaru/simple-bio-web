let currentSlide = 0;
const memberCards = document.querySelectorAll('.member');

function showSlide(index) {
  memberCards.forEach((card, i) => {
    if (i === index) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % memberCards.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + memberCards.length) % memberCards.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);