const args = process.argv.slice(2);
const timer = () => {
  args.sort(function(a, b) {
    return a - b;
  });
  for (let item of args) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, item * 1000);
  }
};

timer();