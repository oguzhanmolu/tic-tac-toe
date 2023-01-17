'use strict';
// Everything about display
const Gameboard = (() => {
  // Player factory
  const playerFactory = (sign) => {
    return { sign };
  };

  // Variables
  const playerX = playerFactory('X');
  const playerO = playerFactory('O');
  let gameboard = ['', '', '', '', '', '', '', '', ''];
  const titleElement = document.querySelector('#title');
  const fieldElements = document.querySelectorAll('.field');
  const btnRestart = document.querySelector('#restart');

  // All occuring events when fields are clicked.
  fieldElements.forEach((ele) =>
    ele.addEventListener('click', (e) => {
      if (
        gameController.round >= 10 ||
        gameboard[e.target.id] !== '' ||
        gameController.isGameOver == true
      )
        return;

      // This adds the player marks on field clicks.
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

  // Simple reset for the game (Lazy but we don't need save any values anyways for next rounds.)
  btnRestart.addEventListener('click', () => window.location.reload());
})();

// Everything about game controls
const gameController = (() => {
  let round = 1;
  let isGameOver = false;

  const checkWinner = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  };

  return { round, isGameOver, checkWinner };
})();
