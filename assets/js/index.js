// Rest operator

function sum(number = 0, ...numbers) {
  let result = number;

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  return result;
}

const arr1 = [1, 2, 3, 4, 5];

const [a, b, c, ...arr2] = arr1;

const user = {
  name: '213',
  lsatName: '3243423',
  phone: '3546543541',
};

const { phone, ...userWithoutPhone } = user;

// spread

const numbers1 = [1, 2, 3];
const numbers2 = [9, 8, 7];
const str = 'test';

const numbers = [...numbers1, ...numbers2, ...str];

const defaultSettings = {
  language: 'en',
  currency: 'USD',
};

const userSettings = {
  language: 'ua',
  currency: 'BTC',
};

const finalSettings = {
  test: '21333',
  ...defaultSettings,
  ...userSettings,
  currency: 'UAH'
};

const finalSettings2 = {
  test: '21333',
  language: 'en',
  currency: 'USD',
  language: 'ua',
  currency: 'BTC',
  ...arr1
};
