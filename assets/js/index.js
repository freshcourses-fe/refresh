// getElementById;
// getElementsByClassName;

console.dir(document); // DOM точка входа

const h1 = document.getElementById('mainHeader'); // стучимся к айдишнику
const [thirdH2, firstH2, secondH2] = document.getElementsByTagName('h2'); // находим ВСЕ элементы с данным тегом
const queryH1 = document.querySelector('#mainHeader span'); // поиск по СSS селектору
const spans = document.querySelectorAll('#mainHeader span'); // // поиск по СSS селектору всех элементов


h1.addEventListener('click', () => {
  alert('clicked on h1');
});

h1.addEventListener('click', () => {
  alert('clicked on h1 x2');
});

/*
  Есть кнопка
  при наведении на неё курсора должен былетать алерт, на котором написано, просьба 
  не висеть над душой
  При выходе курсора за пределы кнопки, она лаертом должна вас благодарить
*/

const btn = document.getElementById('btn');

function enterListener() {
  alert('Уйди плз');
}

function leaveListener() {
  alert('спс');
}

btn.addEventListener('mouseenter', enterListener);

btn.addEventListener('mouseleave', leaveListener);

btn.removeEventListener('mouseenter', enterListener);
btn.removeEventListener('mouseleave', leaveListener);