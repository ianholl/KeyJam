function playSound (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return;
        
  if(key.classList.contains('drums')) {
    key.classList.add('playingD');
    audio.volume = 0.9;
  } else if (key.classList.contains('guitars')) {
    key.classList.add('playingG');
    audio.volume = 1.0;
  }

  audio.currentTime = 0;
  audio.play();
}

function removeTransition (e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playingD', 'playingG');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound);