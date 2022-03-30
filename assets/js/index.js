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
