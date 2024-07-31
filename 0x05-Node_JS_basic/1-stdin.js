const readline = require('readline');

// Create an interface for reading input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the initial message
console.log('Welcome to Holberton School, what is your name?');

// Listen for the user's input
rl.question('', (input) => {
  // Output the user's name
  console.log(`Your name is: ${input}`);

  // Display the closing message and close the interface
  rl.close();
});

// When the readline interface is closed, display the closing message
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
