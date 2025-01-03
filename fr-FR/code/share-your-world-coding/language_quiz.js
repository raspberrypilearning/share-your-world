// Language quiz
var score = 0;
var currentQ = 0;
const questions = document.querySelectorAll('.q-container');
const alert = document.querySelector('#alert');
function nextQ(question) {
  // Update score
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  if (answer) {
    //Hide Alert
    alert.innerHTML = '';
    alert.style.display = 'none';

    //Increase score
    score += parseInt(answer.value);

    // Change question
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
    alert.innerHTML = '<p>Please pick an option!</p>';
  }
}
questions[0].style.display = 'block';
questions[0].style.opacity = 1;
function quizResult() {
  if (score <= 6) {
    scratch();
  } else if (score <= 12) {
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
    'Scratch est un environnement de codage basé sur des blocs \n     Il est parfait pour les débutants, mais aussi pour ceux qui souhaitent acquérir plus de confiance en eux avec le codage. \n     Voici quelques projets qui pourraient te plaire !';
  project1.innerText = 'projects.raspberrypi.org/en/projects/alien-language';
  project2.innerText = 'projects.raspberrypi.org/en/projects/beat-the-goalie';
}
function python() {
  languageHeading.innerText = 'Python';
  languageText.innerText =
    'Python est un langage de programmation textuel. \n     Il utilise des commandes en anglais simple, ce qui le rend plus simple à comprendre. \n     Voici quelques projets qui pourraient te plaire !';
  project1.innerText = 'projects.raspberrypi.org/en/projects/hello-world';
  project2.innerText = 'projects.raspberrypi.org/en/projects/colourful-creations';
}
function unity() {
  languageHeading.innerText = 'C#';
  languageText.innerText =
    'C# est un langage de programmation textuel plus avancé. \n     Il offre de nombreuses possibilités. Comme créer des jeux avec le moteur Unity ! \n     Voici quelques projets qui pourraient te plaire !';
  project1.innerText = 'projects.raspberrypi.org/en/projects/explore-a-3d-world';
  project2.innerText = 'projects.raspberrypi.org/en/projects/star-collector';
}
