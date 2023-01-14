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
      if (gameController.round >= 10) return;
      let index = Number(e.target.dataset.index);

      if (gameboard[index] === '') {
        if (gameController.round % 2 !== 0) {
          e.target.textContent = 'X';
          titleElement.textContent === `Player O's turn`;
          gameboard[index] === playerX.sign;
          gameController.round++;
          console.log(gameboard[index], gameController.round);
        } else {
          e.target.textContent = 'O';
          titleElement.textContent === `Player X's turn`;
          gameboard[index] === playerO.sign;
          gameController.round++;
          console.log(gameboard[index], gameController.round);
        }
      }
    })
  );
  return { gameboard };
})();

const gameController = (() => {
  let round = 1;
  let gameFinished = false;

  return { round };
})();
