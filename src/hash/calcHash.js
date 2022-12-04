import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
const path = './src/hash/files/';

const calculateHash = async () => {
  const hash = createHash('sha256');

  try {
    if (!existsSync(`${path}fileToCalculateHashFor.txt`)) {
      throw new Error('FS operation failed');
    }
    const content = await readFile(`${path}fileToCalculateHashFor.txt`, {
      encoding: 'utf8',
    });

    hash.update(content);
    console.log(hash.digest('hex'));
  } catch (err) {
    console.error(err);
  }
};

await calculateHash();
