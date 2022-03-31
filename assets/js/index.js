function countdown(number) {
  debugger;
  if (number <= 0) {
    console.log('go');
  } else {
    console.log(number);
    countdown(number - 1);
  }
}

/*
  дан пустой массив
  написать функцию которая будет добавлять в него строку
  которую введет пользователь промптом
  функция как параметр принимает число раз, которое 
  она будет запускатся
*/

const arr = [];

function addToArray(number) {
  if (number > 0) {
    arr.push(prompt('Enter string'));
    addToArray(number - 1);
  }
  return arr;
}
