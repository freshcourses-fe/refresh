const user = {
  name: 'User',
  surname: 'Userenko',
  age: 42,
  gender: 'male',
  address: {
    country: 'UA',
    city: 'ZP',
  },
};

const {
  name,
  surname: lastName,
  address: { city },
  // address,
} = user;

const arr = [5, 8, 7, 9, 6, 84, 69, 41, 0, 8154];

const [test1, test2, , test4] = arr;

const tuple = ['test article', { text: 'lorem', author: '' }];
const [title, articleData] = tuple;

const filteredUser1 = {
  name: 'User',
  surname: 'Userenko',
  age: 42,
};

const { address, ...filteredUser2 } = user;

const [value1, value2, ...arr2] = arr;

function printUserAddress({ address: { country, city } }) {
  return `Country: ${country}
City: ${city}`;
}

// Map && Set

const map = new Map();

map.set(printUserAddress, 'test 0');
map.set(1, 'test 1');
map.set(2, 'test 2');
map.set(1, 'test 212321');
map.set('1', 'test next');
const test2134 = map.get(printUserAddress);
map.has(printUserAddress);
const result = map.delete(2);
const result2 = map.delete(2);

// map.clear();

// for (const [key, value] of map) {
//   console.log(key);
//   console.log(value);
// }

// map.forEach((value, key, currentMap) => {
//   console.log(key);
//   console.log(value);
//   console.log(currentMap);
// });
// for (const [key, value] of map) {
//   console.log(key);
//   console.log(value);
// }

// for (const key of map.keys()) {
//   console.log(key);
// }

// for (const value of map.values()) {
//   console.log(value);
// }

const map2 = new Map([
  ['key', 'value'],
  [1, 10],
]);

const set = new Set();

set.add(1); // добавить значение
set.add(5);
set.add('test');
set.add(1);
const res = set.has('1'); // проверка наличия значения
set.delete(1);
set.add(user);
//  set.clear()

// set.forEach((value, value1, set) => {
//   console.log(value);
//   console.log(value1);
//   console.log(value1 === value);
//   console.log(set);
// });

for (const item of set.entries()) {
  console.log(item);
}

const set2 = new Set([1, 24, 5, 6, 79, 0, 56, 0, 213]);

/*
 Составить список уникальных имен 
 на осонвании массивов с именами пользователей
*/
const names1 = ['Alex', 'Petya', 'Natasha'];

const names2 = ['Pavlo', 'Anton'];
const names3 = ['Anton', 'Alex', 'Timur'];

// данные из всех массивов будут елементами
const popularNames = new Set([...names1, ...names2, ...names3]);

// for (const name of names1) {
//   popularNames.add(name);
// }

// for (const name of names2) {
//   popularNames.add(name);
// }
// for (const name of names3) {
//   popularNames.add(name);
// }

// names1.forEach((name) => {
//   popularNames.add(name);
// });

/*

  при загрузке страницы пользователя спросить язык

  когда пользователь выберет язык показать ему приветствие
  на его языке алертом
  *если язык не поддерживается то естьльзовать английское приветствие
  строка с приветсвием хранится в отдельном Мапе

*/
const userLanguage = prompt(`Select language:
en - English
ua - Ukrainian`);

const greetings = new Map([
  [
    'en',
    {
      greetingText: 'Hello',
      pageTitle: 'Main Page',
    },
  ],
]);

greetings.set('ua', { greetingText: 'Вітаю', pageTitle: 'Головна сторінка' });

if (greetings.has(userLanguage)) {
  const translation = greetings.get(userLanguage);
  alert(translation.greetingText);
} else {
  const translation = greetings.get('en');
  alert(translation.greetingText);
}


