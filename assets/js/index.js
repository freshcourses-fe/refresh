const arr = [1, 'test', true, null, { name: 'User' }];
const numbers = [20, 5, 78, 63, 144];

Array.isArray(arr);

const mapRes = arr.map((elem, index, arr) => {
  // console.log(elem);
  elem++;

  return index + Math.random();
});

const forEachResult = arr.forEach((elem, index, arr) => {
  console.log(elem);

  elem++;
});

const filterResult = arr.filter((elem, index, arr) => {
  return elem;
});

const reduceResult = numbers.reduce((prevValue, currentValue, index, arr) => {
  return prevValue * currentValue;
}, 1);

// const spliceRes = arr.splice(1, 2, 'new', false, null);

const sliceRes = arr.slice(1, 3);

const concatArr = arr.concat(1,3,4,5,76, ['test','text','asdg', [1,2,4,5,6]]);

const neoConcatArr = [...arr,1,3,4,5,76, ...['test','text','asdg', [1,2,4,5,6]] ];

const joinRes = arr.join(' - ');
