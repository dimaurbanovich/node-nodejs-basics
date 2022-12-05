import { writeFile } from 'fs/promises';
import { existsSync } from 'fs';
const path = './src/fs/files/';

const create = async () => {
  try {
    if (existsSync(`${path}fresh.txt`)) {
      throw new Error('FS operation failed');
    }
    await writeFile(`${path}fresh.txt`, 'I am fresh and young');
  } catch (err) {
    console.log(err);
  }
};

await create();
