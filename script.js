let allColorBoxes = document.querySelectorAll('.color-box');

let myFunction = function() {
  let attribute = this.getAttribute('id');
  console.log(attribute);
};

for (let i = 0; i < allColorBoxes.length; i++) {
  let dateBox = allColorBoxes[i];
  
  dateBox.addEventListener('click', myFunction)
  dateBox.addEventListener('click', promptUser);
}

function promptUser() {
  let body = document.querySelector('body');

  let panel = document.createElement('div');
  panel.setAttribute('class', 'msgBox');
  body.appendChild(panel);

  let question = document.createElement('p');
  question.setAttribute('id', 'question');
  question.textContent = 'How\'s your mood today?';
  panel.appendChild(question);

  let ansFantastic = document.createElement('p');
  // let btnFantastic = document.createElement('button');
  ansFantastic.setAttribute('class', 'answer');
  ansFantastic.textContent = 'Fantastic, amazing day! :D';
  panel.appendChild(ansFantastic);

  let ansSad = document.createElement('p');
  ansSad.setAttribute('class', 'answer');
  ansSad.textContent = 'Sad, gloomy day :\'(';
  panel.appendChild(ansSad);

  let ansNervous = document.createElement('p');
  ansNervous.setAttribute('class', 'answer');
  ansNervous.textContent = 'Nervous :/';
  panel.appendChild(ansNervous);

  let ansNormal = document.createElement('p');
  ansNormal.setAttribute('class', 'answer');
  ansNormal.textContent = 'Normal :|';
  panel.appendChild(ansNormal);

  let ansGreat = document.createElement('p');
  ansGreat.setAttribute('class', 'answer');
  ansGreat.textContent = 'Great Day :)';
  panel.appendChild(ansGreat);

  let ansMad = document.createElement('p');
  ansMad.setAttribute('class', 'answer');
  ansMad.textContent = 'Mad, frustrating day >:(';
  panel.appendChild(ansMad);

  let closeBtn = document.createElement('button');
  closeBtn.textContent = 'x';
  panel.appendChild(closeBtn);

  closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);
  }
}
