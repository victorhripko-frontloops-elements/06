import './style.scss';
import { throttle } from 'lodash-es';

(() => {
  const block = document.querySelector('.block');

  const mouseMove = (e) => {
    const parentCenterY = window.innerHeight / 2;
    const parentCenterX = window.innerWidth / 2;

    const rotateX = (parentCenterX - e.clientX) / 100;
    const rotateY = (parentCenterY - e.clientY) / 100;

    block.style.transform = `rotateX(${rotateY}deg) rotateY(${-rotateX}deg)`;
  };

  const throttleMove = throttle(mouseMove, 10);
  document.addEventListener('mousemove', throttleMove);
})();
