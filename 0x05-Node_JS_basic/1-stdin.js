
console.log('Welcome to Holberton School, what is your name?');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (name) => {
  if (name.toLowerCase() === 'exit') {
    console.log('This important software is now closing');
    rl.close();
  } else {
    console.log(`Your name is: ${name}`);
    rl.prompt();
  }
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
