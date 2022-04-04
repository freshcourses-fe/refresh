const btn = document.getElementById('btn');

let counter = 0;

const counterSpan = document.querySelector('#counterSpan');

const clickHandler = () => {
  // counterSpan.innerText = ++counter;
  counterSpan.textContent = ++counter;
  // counterSpan.innerHTML = `<span onmouseenter="window.close()">${++counter}</span>`;
};

btn.addEventListener('click', clickHandler);

/*
  Приделать кликеру кнопку обнуления счета
*/