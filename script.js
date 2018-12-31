const colorBoxContainer = document.querySelector('#button-container');

colorBoxContainer.addEventListener('click', promptUser);

function promptUser(event) {
  let clickedBox = event.target;

  switch (clickedBox.className) {
    case 'color-box':
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
      ansFantastic.setAttribute('class', 'answer');
      ansFantastic.textContent = 'Fantastic, amazing day! :D';
      panel.appendChild(ansFantastic);
  
      let ansSad = document.createElement('p');
      ansSad.setAttribute('id', 'p-sad');
      ansSad.setAttribute('class', 'answer');
      ansSad.textContent = 'Sad, gloomy day :\'(';
      panel.appendChild(ansSad);
  
      let ansNervous = document.createElement('p');
      ansNervous.setAttribute('id', 'p-nervous');
      ansNervous.setAttribute('class', 'answer');
      ansNervous.textContent = 'Nervous :/';
      panel.appendChild(ansNervous);
  
      let ansNormal = document.createElement('p');
      ansNormal.setAttribute('id', 'p-normal');
      ansNormal.setAttribute('class', 'answer');
      ansNormal.textContent = 'Normal :|';
      panel.appendChild(ansNormal);
  
      let ansGreat = document.createElement('p');
      ansGreat.setAttribute('id', 'p-great');
      ansGreat.setAttribute('class', 'answer');
      ansGreat.textContent = 'Great Day :)';
      panel.appendChild(ansGreat);
  
      let ansMad = document.createElement('p');
      ansMad.setAttribute('id', 'p-mad');
      ansMad.setAttribute('class', 'answer');
      ansMad.textContent = 'Mad, frustrating day >:(';
      panel.appendChild(ansMad);
  
      let closeBtn = document.createElement('button');
      closeBtn.textContent = 'x';
      panel.appendChild(closeBtn);
  
      closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
        colorBoxContainer.addEventListener('click', promptUser);
      }
      break;
  
    default:
      console.log('oops!');
      break;
  }
}
