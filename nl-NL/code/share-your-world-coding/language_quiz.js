// Taalquiz
var score = 0;
var currentQ = 0;
const questions = document.querySelectorAll('.q-container');
const alert = document.querySelector('#alert');
function nextQ(question) {
  // Score bijwerken
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  if (answer){
    // Waarschuwing verbergen
    alert.innerHTML = '';
    alert.style.display = 'none';

    // Verhoog de score
    score += parseInt(answer.value);

    // Vraag wijzigen
    questions[currentQ].classList.remove('slide-left');
    questions[currentQ].classList.add('fade-out');
    currentQ++;
    if (currentQ == questions.length - 1) {
      console.log('Called');
      quizResult();
    }
    setTimeout(() => {
      questions[currentQ - 1].style.display = 'none';
      questions[currentQ].classList.add('slide-left');
      questions[currentQ].style.display = 'block';
    }, '2000');
  } else {
    alert.style.display = 'block';
    alert.innerHTML = '<p>Kies een optie!</p>';
  }
}
questions[0].style.display = 'block';
questions[0].style.opacity = 1;
function quizResult(){
  if (score <= 6){
    scratch();
  } else if (score <= 12){
    python();
  } else {
    unity();
  }
}

// Languages
const languageHeading = document.querySelector('#languagetitle');
const languageText = document.querySelector('#languagetext');
const project1 = document.querySelector('#project1');
const project2 = document.querySelector('#project2');
function scratch() {
  languageHeading.innerText = 'Scratch';
  languageText.innerText =
    'Scratch is een blokgebaseerde programmeeromgeving \n     Dit is perfect voor beginners, maar ook voor hen die meer vertrouwen willen krijgen in programmeren. \n     Hier zijn enkele projecten die je misschien leuk vindt!';
  project1.innerText = 'projects.raspberrypi.org/en/projects/alien-language';
  project2.innerText = 'projects.raspberrypi.org/en/projects/beat-the-goalie';
}
function python() {
  languageHeading.innerText = 'Python';
  languageText.innerText =
    'Python is een op tekst gebaseerde programmeertaal. \n     De taal gebruikt opdrachten in eenvoudig Engels, waardoor het makkelijker te begrijpen is. \n     Hier zijn een paar projecten die je misschien leuk vindt!';
  project1.innerText = 'projects.raspberrypi.org/en/projects/hello-world';
  project2.innerText = 'projects.raspberrypi.org/en/projects/colourful-creations';
}
function unity() {
  languageHeading.innerText = 'C#';
  languageText.innerText =
    'C# is een meer geavanceerde tekstgebaseerde programmeertaal. \n     Er zijn een heleboel geweldige dingen die je ermee kunt doen. Zoals het maken van games met de Unity engine! \n     Hier zijn een paar projecten die je misschien leuk vindt!';
  project1.innerText = 'projects.raspberrypi.org/en/projects/explore-a-3d-world';
  project2.innerText = 'projects.raspberrypi.org/en/projects/star-collector';
}
