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
