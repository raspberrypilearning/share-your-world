// KLEURMODUS
document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');

  // Controleer of de voorkeur van de kleurmodus is opgeslagen in lokale opslag
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  // Stel de initiële kleurtoestand in op basis van de opgeslagen voorkeur
  document.body.classList.toggle('dark-mode', isDarkMode);
  darkModeToggle.checked = isDarkMode;
  darkModeToggle.addEventListener('change', function () {
    const isDarkMode = darkModeToggle.checked;

    // Controleer of de kleurmodus al actief is
    if (isDarkMode !== document.body.classList.contains('dark-mode')) {
      // Werk de body-klasse bij en sla de voorkeur van de gebruiker op in de lokale opslag
      document.body.classList.toggle('dark-mode', isDarkMode);
      localStorage.setItem('darkMode', isDarkMode.toString());
    }
  });
});

// PARALLAX SCROLLEN
const allParallax = document.querySelectorAll('.parallax');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1; // Fade-in effect
        observer.unobserve(entry.target); // Stop met observeren zodra de sectie zichtbaar is
      }
    });
  },
  {
    threshold: 0.5,
  }
);
allParallax.forEach((parallax) => observer.observe(parallax));
