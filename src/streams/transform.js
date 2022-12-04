import { Transform } from 'stream';

const transform = async () => {
  const reverse = () => {
    return new Transform({
      transform(chunk, encoding, callback) {
        const reversed = chunk.reverse();
        callback(null, reversed);
      },
    });
  };
  const createReverse = reverse();

  process.stdin.pipe(createReverse).pipe(process.stdout);
};

await transform();
