// MODE COULEUR
document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');

  // Vérifier si la préférence du mode couleur est stockée dans le stockage local
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  // Définir l'état initial du mode couleur en fonction de la préférence enregistrée
  document.body.classList.toggle('dark-mode', isDarkMode);
  darkModeToggle.checked = isDarkMode;
  darkModeToggle.addEventListener('change', function () {
    const isDarkMode = darkModeToggle.checked;

    // Vérifier si le mode couleur est déjà actif
    if (isDarkMode !== document.body.classList.contains('dark-mode')) {
      // Mettre à jour la classe du corps et stocker la préférence de l'utilisateur dans le stockage local
      document.body.classList.toggle('dark-mode', isDarkMode);
      localStorage.setItem('darkMode', isDarkMode.toString());
    }
  });
});

// DÉFILEMENT PARALLAXE
const allParallax = document.querySelectorAll('.parallax');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1; // Effet de fondu
        observer.unobserve(entry.target); // Arrêter d'observer une fois que la section est visible
      }
    });
  },
  {
    threshold: 0.5,
  }
);
allParallax.forEach((parallax) => observer.observe(parallax));
