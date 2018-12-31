const colorBoxContainer = document.querySelector('#button-container');

colorBoxContainer.addEventListener('click', dateChosen);
colorBoxContainer.addEventListener('click', promptUser);

function dateChosen(event) {
  const clickedBox = event.target;
  return clickedBox;
}

function promptUser(validBox) {
  validBox = dateChosen(event);

  switch (validBox.className) {
    case 'color-box':
      colorBoxContainer.removeEventListener('click', dateChosen);
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
      ansFantastic.setAttribute('id', 'p-fantastic');
      ansFantastic.setAttribute('class', 'mood-answer');
      ansFantastic.textContent = 'Fantastic, amazing day! :D';
      panel.appendChild(ansFantastic);
  
      let ansSad = document.createElement('p');
      ansSad.setAttribute('id', 'p-sad');
      ansSad.setAttribute('class', 'mood-answer');
      ansSad.textContent = 'Sad, gloomy day :\'(';
      panel.appendChild(ansSad);
  
      let ansNervous = document.createElement('p');
      ansNervous.setAttribute('id', 'p-nervous');
      ansNervous.setAttribute('class', 'mood-answer');
      ansNervous.textContent = 'Nervous :/';
      panel.appendChild(ansNervous);
  
      let ansNormal = document.createElement('p');
      ansNormal.setAttribute('id', 'p-normal');
      ansNormal.setAttribute('class', 'mood-answer');
      ansNormal.textContent = 'Normal :|';
      panel.appendChild(ansNormal);
  
      let ansGreat = document.createElement('p');
      ansGreat.setAttribute('id', 'p-great');
      ansGreat.setAttribute('class', 'mood-answer');
      ansGreat.textContent = 'Great Day :)';
      panel.appendChild(ansGreat);
  
      let ansMad = document.createElement('p');
      ansMad.setAttribute('id', 'p-mad');
      ansMad.setAttribute('class', 'mood-answer');
      ansMad.textContent = 'Mad, frustrating day >:(';
      panel.appendChild(ansMad);
  
      let closeBtn = document.createElement('button');
      closeBtn.textContent = 'x';
      panel.appendChild(closeBtn);

      panel.addEventListener('click', saveMoodChoice);
  
      closeBtn.onclick = function() {
        panel.removeEventListener('click', saveMoodChoice);
        panel.parentNode.removeChild(panel);

        colorBoxContainer.addEventListener('click', dateChosen);
        colorBoxContainer.addEventListener('click', promptUser);
      }
      break;
  
    default:
      console.log('oops!');
      break;
  }
}

function saveMoodChoice(event) {
  const userMood = event.target;
  console.log(userMood.id);
}
