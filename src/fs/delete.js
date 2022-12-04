import { rm } from 'fs/promises';
import { existsSync } from 'fs';
const path = './src/fs/files/';

const remove = async () => {
  try {
    if (!existsSync(`${path}fileToRemove.txt`)) {
      throw new Error('FS operation failed');
    }

    await rm(`${path}fileToRemove.txt`);
  } catch (err) {
    console.error(err);
  }
};

await remove();
