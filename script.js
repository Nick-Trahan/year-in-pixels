const allColorBoxes = document.querySelectorAll('.color-box');

for (let i = 0; i < allColorBoxes.length; i++) {
  const tappedBox = allColorBoxes[i];
  
  tappedBox.addEventListener('click', promptUser);
}

function promptUser() {
  console.log('It works!');
}
