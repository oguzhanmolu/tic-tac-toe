'use strict';
// Everything about display
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

  // This adds the player marks on field clicks.
  fieldElements.forEach((ele) =>
    ele.addEventListener('click', (e) => {
      if (gameController.round >= 10 || gameboard[e.target.id] !== '') return;
      gameController.round++;

      if (gameController.round % 2 == 0) {
        gameboard[e.target.id] = playerX.sign;
        e.target.textContent = playerX.sign;
        titleElement.textContent = `Player O's turn`;
      } else {
        gameboard[e.target.id] = playerO.sign;
        e.target.textContent = playerO.sign;
        titleElement.textContent = `Player X's turn`;
      }
      console.log(gameboard);
    })
  );
})();

// Everything about game controls
const gameController = (() => {
  let round = 1;
  return { round };
})();
