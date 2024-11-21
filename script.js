const backToTopButton = document.getElementById('back-to-top');

// Ascultăm evenimentul de scroll
window.addEventListener('scroll', function () {
  if (window.scrollY > 400) { // Afișăm butonul dacă utilizatorul derulează mai jos de 300px
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Eveniment pentru clic pe buton
backToTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Scroll lin până sus
  });
});