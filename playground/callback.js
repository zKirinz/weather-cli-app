let x;
const queryData = (cb) => {
  setTimeout(() => {
    x = 100;
    console.log('query DB success!');
    cb();
  }, 2000);
};

const printData = () => {
  console.log(x);
};

queryData(() => {
  printData();
});

