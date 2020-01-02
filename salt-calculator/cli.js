const stdin = process.stdin;
const stdout = process.stdout;

const PROMPT = '> ';

stdout.write(PROMPT);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', data => {
  stdout.write(`echo ${data}`);
  stdout.write(PROMPT);
});

process.on('SIGINT', () => {
  stdout.write('\n\nBye!\n');
  process.exit();
});
console.log(PROMPT);