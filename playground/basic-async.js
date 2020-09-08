console.log('First');

setTimeout(() => {
  console.log('zero');
}, 0);

setTimeout(() => {
  console.log('Second');
}, 1000);

console.log('Third');
