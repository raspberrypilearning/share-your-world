// TIJDLIJN
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
      // Initiële gebeurtenissen
      historicalEvents = [
        {
          year: 1977,
          event: 'Wildcats opgericht',
        },
        {
          year: 1980,
          event: 'Toegetreden tot de Nationale Liga',
        },
        {
          year: 1996,
          event: 'Kampioensbeker gewonnen',
        },
        {
          year: currentDate.getFullYear(),
          event: 'Nu',
        },
      ];
      renderTimelineEvents();
    }
  }

  // Functie om gebeurtenissen op de tijdlijn te plaatsen
  function renderTimelineEvents() {
    nodesContainer.innerHTML = '';
    const minYear = historicalEvents[0].year;
    const maxYear = historicalEvents[historicalEvents.length - 1].year;
    const totalYears = maxYear - minYear;
    historicalEvents.forEach((event) => {
      const node = document.createElement('div');
      node.classList.add('event');

      // Bereken de procentuele breedte op basis van het tijdsverschil
      let percentageWidth = ((event.year - minYear) / totalYears) * 100;
      console.log(percentageWidth);
      node.style.left = percentageWidth + '%';
      node.innerHTML = `<span class="year">${event.year}</span><span class="event-description">${event.event}</span>`;
      nodesContainer.appendChild(node);
    });
  }

  // Functie om een nieuwe gebeurtenis toe te voegen
  function addNewEvent(year, event) {
    const newEvent = {
      year: parseInt(year),
      event: event,
    };
    historicalEvents.push(newEvent);
    historicalEvents.sort((a, b) => a.year - b.year); // Gebeurtenissen chronologisch sorteren
    renderTimelineEvents();
    localStorage.setItem('historicalEvents', JSON.stringify(historicalEvents));
  }

  // Voeg begingebeurtenissen toe wanneer de pagina wordt geladen
  loadEventsFromLocalStorage();

  // Muisbeweging
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

  // Event listener toevoegen voor het toevoegen van een nieuwe gebeurtenis
  addButton.addEventListener('click', function () {
    const yearInputValue = inputYear.value;
    const eventInputValue = inputEvent.value;
    if (yearInputValue && eventInputValue) {
      addNewEvent(yearInputValue, eventInputValue);
      inputYear.value = '';
      inputEvent.value = '';
    } else {
      alert('Vul zowel de velden voor het jaar als voor de gebeurtenis in.');
    }
  });
});
