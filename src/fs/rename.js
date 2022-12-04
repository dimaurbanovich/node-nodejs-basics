import { rename as renameFile } from 'fs/promises';
import { existsSync } from 'fs';
const path = './src/fs/files/';

const rename = async () => {
  try {
    if (
      existsSync(`${path}properFilename.md`) ||
      !existsSync(`${path}wrongFilename.txt`)
    ) {
      throw new Error('FS operation failed');
    }

    await renameFile(`${path}wrongFilename.txt`, `${path}properFilename.md`);
  } catch (err) {
    console.error(err);
  }
};

await rename();
