const args = process.argv.slice(2);
const timer = () => {
  const times = args.sort(function(a, b) {
      return a - b;
    }).filter(num => num > 0);
  for (let item of times) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, item * 1000);
  }
};

timer();