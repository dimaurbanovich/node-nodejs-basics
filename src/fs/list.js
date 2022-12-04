import { readdir } from 'fs/promises';
import { existsSync } from 'fs';
const path = './src/fs/files';

const list = async () => {
  try {
    if (!existsSync(`${path}`)) {
      throw new Error('FS operation failed');
    }
    const files = await readdir(`${path}`);

    files.forEach((file) => console.log(file));
  } catch (err) {
    console.error(err);
  }
};

await list();
