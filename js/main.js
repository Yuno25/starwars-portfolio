const hoverSound = new Audio('../assets/sounds/hover.mp3');
const clickSound = new Audio('../assets/sounds/click.mp3');

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
  link.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});
