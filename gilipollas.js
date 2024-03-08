const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');
const resultDiv = document.getElementById('result');
const audio = new Audio('imagenes/chipi_chapa.mp3');

let yesButtonWidth = 150;
let yesButtonHeight = 40;
let growthFactor = 5;
let audioPlaying = false;

yesButton.addEventListener('click', () => {
  resultDiv.innerHTML = '<img src="imagenes/happy_cat.gif" alt="Gato feliz"><p>TKM MUACK &lt;3</p>';
  resetYesButtonSize();
  audio.loop = true;
  audio.play();
  audioPlaying = true;
});

noButton.addEventListener('click', () => {
  resultDiv.innerHTML = '<img src="imagenes/sad_cat.gif" alt="Gato triste">';
  yesButtonWidth += growthFactor;
  yesButtonHeight += growthFactor / 2; 
  yesButton.style.width = `${yesButtonWidth}px`;
  yesButton.style.height = `${yesButtonHeight}px`;


  if (audioPlaying) {
    audio.pause();
    audio.currentTime = 0;
    audioPlaying = false;
  }

  
  let newPositionX = Math.random() * (window.innerWidth - 200);
  let newPositionY = Math.random() * (window.innerHeight - 100);
  newPositionX = Math.max(0, newPositionX);
  newPositionY = Math.max(0, newPositionY);
  noButton.style.left = `${newPositionX}px`;
  noButton.style.top = `${newPositionY}px`;
});

function resetYesButtonSize() {
  yesButtonWidth = 150;
  yesButtonHeight = 40;
  yesButton.style.width = `${yesButtonWidth}px`;
  yesButton.style.height = `${yesButtonHeight}px`;
  growthFactor = 5;
}
