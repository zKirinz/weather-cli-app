const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else reject('Invalid input!');
    }, 2000);
  });
};

// 1 + 2 + 3
/*
asyncAdd(1, 2).then((res) => {
  console.log(res);
  asyncAdd(res, 3).then((res) => {
    console.log(res);
  });
});
*/

asyncAdd(1, 2)
  .then((res) => {
    console.log(res);
    return asyncAdd(res, 3);
  })
  .then((res) => {
    console.log(res);
    return asyncAdd(res, '4');
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
