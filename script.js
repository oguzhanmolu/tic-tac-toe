'use strict';
const Gameboard = (() => {
  const playerFactory = (sign) => {
    return { sign };
  };
  const playerX = playerFactory('X');
  const playerO = playerFactory('O');
  let gameboard = ['', '', '', '', '', '', '', '', ''];
  const titleElement = document.querySelector('#title');
  const fieldElements = document.querySelectorAll('.field');
  const btnRestart = document.querySelector('#restart');

  fieldElements.forEach((ele) =>
    ele.addEventListener('click', (e) => {
      let index = Number(e.target.dataset.index);
      if (gameController.round >= 10 || gameboard[index] !== '') return;

      gameController.round++;
      if (gameController.round % 2 == 0) {
        gameboard[index] = playerX.sign;
        e.target.textContent = playerX.sign;
        titleElement.textContent = `Player O's turn`;
        console.log(gameboard);
      } else {
        gameboard[index] = playerO.sign;
        e.target.textContent = playerO.sign;
        titleElement.textContent = `Player X's turn`;
        console.log(gameboard);
      }
    })
  );
})();

const gameController = (() => {
  let round = 1;
  return { round };
})();
