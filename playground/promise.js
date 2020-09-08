const newPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success'), 1000);
  });
};

newPromise()
  .then((res) => {
    console.log('res: ', res);
  })
  .catch((err) => {
    console.log('err: ', err);
  });
