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

  // All occuring events when fields are clicked.
  fieldElements.forEach((ele) =>
    ele.addEventListener('click', (e) => {
      if (gameController.round >= 10 || gameboard[e.target.id] !== '') return;
      gameController.round++;

      // This adds the player marks on field clicks.
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

  // Restart the game (I could reset every variable, but we don't need any ongoing value for game to continue. So this is way cleaner IMHO)
  btnRestart.addEventListener('click', () => {
    window.location.reload();
  });
})();

// Everything about game controls
const gameController = (() => {
  let round = 1;
  return { round };
})();
