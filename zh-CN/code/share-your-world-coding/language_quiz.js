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
    'Scratch 是一个基于积木块的编程环境 \n     它非常适合初学者，也适合那些想要对编程更有信心的人。 \n     这里有一些你可能会喜欢的项目！';
  project1.innerText = 'projects.raspberrypi.org/en/projects/alien-language';
  project2.innerText = 'projects.raspberrypi.org/en/projects/beat-the-goalie';
}
function python() {
  languageHeading.innerText = 'Python';
  languageText.innerText =
    'Python 是一种基于文本的编程语言。 \n     它使用简单的英语命令，这使得它更容易理解。 \n     这里有一些你可能会喜欢的项目！';
  project1.innerText = 'projects.raspberrypi.org/en/projects/hello-world';
  project2.innerText = 'projects.raspberrypi.org/en/projects/colourful-creations';
}
function unity() {
  languageHeading.innerText = 'C#';
  languageText.innerText =
    'C# 是一种更高级的基于文本的编程语言。 \n     你可以用它做很多很棒的事情。比如用 Unity 引擎创建游戏！ \n     这里有一些你可能会喜欢的项目！';
  project1.innerText = 'projects.raspberrypi.org/en/projects/explore-a-3d-world';
  project2.innerText = 'projects.raspberrypi.org/en/projects/star-collector';
}
