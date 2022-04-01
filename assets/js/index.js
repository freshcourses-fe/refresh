try {
  console.log(1);

  throw new Error('error 1');

  console.log(2);
} catch (err) {
  console.log('error 1');
} finally {
  console.log('end 1');
}

try {
  console.log(1);

  throw new Error('error 2');
} catch (err) {
  if (err instanceof TypeError) {
    console.log('type error');
  } else if (err instanceof Error) {
    console.log('just error');
  }
}

try {
  console.log(1);

  // throw new Error('error 3');
} finally {
  console.log('end 2');
}
const test = 213;