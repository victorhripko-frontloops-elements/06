import './style.scss';

(() => {
  const block = document.querySelector('.block');

  document.addEventListener('mousemove', (evt) => {
    const parentCenterY = window.innerHeight / 2;
    const parentCenterX = window.innerWidth / 2;

    const rotateX = (parentCenterX - evt.clientX) / 100;
    const rotateY = (parentCenterY - evt.clientY) / 100;

    block.style.transform = `rotateX(${rotateY}deg) rotateY(${-rotateX}deg)`;
  });
})();
