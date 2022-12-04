import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
const path = './src/fs/files/';

const read = async () => {
  try {
    if (!existsSync(`${path}fileToRead.txt`)) {
      throw new Error('FS operation failed');
    }
    const contents = await readFile(`${path}fileToRead.txt`, {
      encoding: 'utf8',
    });

    console.log(contents);
  } catch (err) {
    console.error(err);
  }
};

await read();
