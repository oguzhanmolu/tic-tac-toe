'use strict';
const title = document.querySelector('#title');
const field = document.querySelectorAll('.field');
const btnRestart = document.querySelector('#restart');

field.forEach((ele) =>
  ele.addEventListener('click', (e) => {
    console.log((e.target.textContent = 'o'));
  })
);
