import { fork } from 'child_process';
const path = './src/cp/files/script.js';

const spawnChildProcess = async (args) => {
  const child = fork(path, args, { silent: true });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);

  child.stdout.on('message', (data) => {
    const message = `Received from child stdout: ${data}`;
    process.stdout.write(message);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--some-arg', 'value1', '--other', 1337, '--arg2', 42]);
