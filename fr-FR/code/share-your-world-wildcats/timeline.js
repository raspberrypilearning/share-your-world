// CHRONOLOGIE
const currentDate = new Date();
document.addEventListener('DOMContentLoaded', function () {
  const nodesContainer = document.getElementById('nodes');
  const addButton = document.getElementById('add-event-btn');
  const inputYear = document.getElementById('year-input');
  const inputEvent = document.getElementById('event-input');
  var historicalEvents = [];
  function loadEventsFromLocalStorage() {
    const storedEvents = localStorage.getItem('historicalEvents');
    if (storedEvents) {
      historicalEvents = JSON.parse(storedEvents);
      renderTimelineEvents();
    } else {
      // Événements initiaux
      historicalEvents = [
        {
          year: 1977,
          event: 'Wildcats formés',
        },
        {
          year: 1980,
          event: 'A rejoint la Ligue nationale',
        },
        {
          year: 1996,
          event: 'A remporté le trophée du championnat',
        },
        {
          year: currentDate.getFullYear(),
          event: 'Actuel',
        },
      ];
      renderTimelineEvents();
    }
  }

  // Fonction permettant de placer des événements sur la chronologie
  function renderTimelineEvents() {
    nodesContainer.innerHTML = '';
    const minYear = historicalEvents[0].year;
    const maxYear = historicalEvents[historicalEvents.length - 1].year;
    const totalYears = maxYear - minYear;
    historicalEvents.forEach((event) => {
      const node = document.createElement('div');
      node.classList.add('event');

      // Calculer le pourcentage de largeur en fonction de la différence de temps
      let percentageWidth = ((event.year - minYear) / totalYears) * 100;
      console.log(percentageWidth);
      node.style.left = percentageWidth + '%';
      node.innerHTML = `<span class="year">${event.year}</span><span class="event-description">${event.event}</span>`;
      nodesContainer.appendChild(node);
    });
  }

  // Fonction pour ajouter un nouvel événement
  function addNewEvent(year, event) {
    const newEvent = {
      year: parseInt(year),
      event: event,
    };
    historicalEvents.push(newEvent);
    historicalEvents.sort((a, b) => a.year - b.year); // Trier les événements par ordre chronologique
    renderTimelineEvents();
    localStorage.setItem('historicalEvents', JSON.stringify(historicalEvents));
  }

  // Ajouter des événements initiaux lors du chargement de la page
  loadEventsFromLocalStorage();

  // Survol de la souris
  nodesContainer.addEventListener('mouseover', function (event) {
    const targetNode = event.target.closest('.event');
    if (targetNode) {
      const description = targetNode.querySelector('.event-description');
      description.style.display = 'block';
    }
  });
  nodesContainer.addEventListener('mouseout', function (event) {
    const targetNode = event.target.closest('.event');
    if (targetNode) {
      const description = targetNode.querySelector('.event-description');
      description.style.display = 'none';
    }
  });

  // Ajouter un event listener pour ajouter un nouvel événement
  addButton.addEventListener('click', function () {
    const yearInputValue = inputYear.value;
    const eventInputValue = inputEvent.value;
    if (yearInputValue && eventInputValue) {
      addNewEvent(yearInputValue, eventInputValue);
      inputYear.value = '';
      inputEvent.value = '';
    } else {
      alert('Veuillez remplir les champs année et événement.');
    }
  });
});
