'use strict';

// Create player
const Player = (sign) => {
  this.sign = sign;

  const getSign = () => {
    return sign;
  };

  return { getSign };
};

// Game board elements
const gameBoard = (() => {
  const gameField = ['', '', '', '', '', '', '', '', ''];

  const setField = (index, sign) => {
    if (index > gameField.length) return;

    gameField[index] = sign;
  };

  const getField = (index) => {
    if (index > gameField.index) return;

    return gameField[index];
  };

  return { setField, getField };
})();

// Everything about game display
const displayController = (() => {
  const fieldElement = document.querySelectorAll('.field');
  const messageElement = document.getElementById('message');
  const btnRestart = document.getElementById('restart');

  // If game is not over, update field text from game board values
  fieldElement.forEach((field) =>
    field.addEventListener('click', (e) => {
      if (gameController.checkIsGameOver() || e.target.textContent !== '')
        return;

      gameController.playRound(Number(e.target.id));
      updateFieldTextContent();
    })
  );

  // Update field text
  const updateFieldTextContent = () => {
    for (let i = 0; i < fieldElement.length; i++) {
      fieldElement[i].textContent = gameBoard.getField(i);
    }
  };

  // Create result announcement
  const setResultMessage = (value) => {
    value === 'Draw'
      ? setMessageTextContent(`It's draw!`)
      : setMessageTextContent(`Player ${value} has won!`);
  };
  // Result message
  const setMessageTextContent = (message) => {
    messageElement.textContent = message;
  };

  // Lazy restart (Well we don't need to save variables for next rounds anyways)
  btnRestart.addEventListener('click', () => window.location.reload());

  return { setResultMessage, setMessageTextContent };
})();

// Everything about game controls
const gameController = (() => {
  const playerX = Player('X');
  const playerO = Player('O');
  let gameRound = 1;
  let isGameOver = false;

  // Round continues as long as there is no winner or draw,
  // and game board values are updated according to player signs
  const playRound = (fieldIndex) => {
    gameBoard.setField(fieldIndex, getCurrentSign());

    // Win
    if (checkWinner(fieldIndex)) {
      displayController.setResultMessage(getCurrentSign());
      isGameOver = true;
      return;
    }

    // Draw
    if (gameRound === 9) {
      displayController.setResultMessage('Draw');
      isGameOver = true;
      return;
    }

    // Game continues
    gameRound++;
    displayController.setMessageTextContent(
      `Player ${getCurrentSign()}'s turn`
    );
  };

  // Get current player's sign
  const getCurrentSign = () => {
    return gameRound % 2 === 1 ? playerX.getSign() : playerO.getSign();
  };

  //   Check win combinations whether if there is a match or not
  const checkWinner = (fieldIndex) => {
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

    // Simply filter and compare game field array with the arrays above
    return winConditions
      .filter((combination) => combination.includes(fieldIndex))
      .some((combinations) =>
        combinations.every(
          (index) => gameBoard.getField(index) === getCurrentSign()
        )
      );
  };

  // Returns true or false for if statement in line 42
  const checkIsGameOver = () => {
    return isGameOver;
  };

  return { playRound, checkIsGameOver };
})();
