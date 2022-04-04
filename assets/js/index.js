const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

let counter = 0;

const counterSpan = document.querySelector('#counterSpan');

const clickHandler = () => {
  // counterSpan.innerText = ++counter;
  counterSpan.textContent = ++counter;
  // counterSpan.innerHTML = `<span onmouseenter="window.close()">${++counter}</span>`;
};

const clearScorehandler = () => {
  counter = 0;
  counterSpan.innerText = counter;
};

btn.addEventListener('click', clickHandler);
btn2.addEventListener('click', clearScorehandler);

/*
  Приделать кликеру кнопку обнуления счетчика и счета
*/
