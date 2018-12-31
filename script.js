const colorBoxContainer = document.querySelector('#button-container');

let usersYear = [];

colorBoxContainer.addEventListener('click', findTarget);
colorBoxContainer.addEventListener('click', promptUser);

function findTarget(event) {
  const clickedBox = event.target;
  return clickedBox;
}

function promptUser() {
  let validBox = findTarget(event);

  usersYear[0] = validBox;

  switch (validBox.className) {
    case 'color-box':
      colorBoxContainer.removeEventListener('click', findTarget);
      colorBoxContainer.removeEventListener('click', promptUser);
  
      let body = document.querySelector('body');
  
      let panel = document.createElement('div');
      panel.setAttribute('class', 'msgBox');
      body.appendChild(panel);
  
      let question = document.createElement('p');
      question.setAttribute('id', 'question');
      question.textContent = 'How\'s your mood today?';
      panel.appendChild(question);
  
      let ansFantastic = document.createElement('p');
      ansFantastic.setAttribute('id', 'rebeccapurple');
      ansFantastic.setAttribute('class', 'mood-answer');
      ansFantastic.textContent = 'Fantastic, amazing day! :D';
      panel.appendChild(ansFantastic);
  
      let ansSad = document.createElement('p');
      ansSad.setAttribute('id', 'blue');
      ansSad.setAttribute('class', 'mood-answer');
      ansSad.textContent = 'Sad, gloomy day :\'(';
      panel.appendChild(ansSad);
  
      let ansNervous = document.createElement('p');
      ansNervous.setAttribute('id', 'green');
      ansNervous.setAttribute('class', 'mood-answer');
      ansNervous.textContent = 'Nervous :/';
      panel.appendChild(ansNervous);
  
      let ansNormal = document.createElement('p');
      ansNormal.setAttribute('id', 'yellow');
      ansNormal.setAttribute('class', 'mood-answer');
      ansNormal.textContent = 'Normal :|';
      panel.appendChild(ansNormal);
  
      let ansGreat = document.createElement('p');
      ansGreat.setAttribute('id', 'orange');
      ansGreat.setAttribute('class', 'mood-answer');
      ansGreat.textContent = 'Great Day :)';
      panel.appendChild(ansGreat);
  
      let ansMad = document.createElement('p');
      ansMad.setAttribute('id', 'red');
      ansMad.setAttribute('class', 'mood-answer');
      ansMad.textContent = 'Mad, frustrating day >:(';
      panel.appendChild(ansMad);
  
      let closeBtn = document.createElement('button');
      closeBtn.textContent = 'x';
      panel.appendChild(closeBtn);

      panel.addEventListener('click', findTarget);
      panel.addEventListener('click', colorDate);
  
      closeBtn.onclick = function() {
        panel.removeEventListener('click', findTarget);
        panel.removeEventListener('click', colorDate);
        panel.parentNode.removeChild(panel);

        colorBoxContainer.addEventListener('click', findTarget);
        colorBoxContainer.addEventListener('click', promptUser);

        usersYear.pop();
      }
      break;
  
    default:
      console.log('oops!');
      break;
  }
}

function colorDate() {
  let userMood = findTarget(event);
  let panel = document.querySelector('.msgBox');

  usersYear[1] = userMood.id;

  panel.removeEventListener('click', findTarget);
  panel.removeEventListener('click', colorDate);
  panel.parentNode.removeChild(panel);

  let date = usersYear[0];
  let mood = usersYear[1];

  date.style.backgroundColor = mood;

  colorBoxContainer.addEventListener('click', findTarget);
  colorBoxContainer.addEventListener('click', promptUser);
}
