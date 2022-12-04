import { readdir, mkdir, copyFile } from 'fs/promises';
import { existsSync } from 'fs';
const path = './src/fs/';

const copy = async () => {
  try {
    if (existsSync(`${path}files_copy`) || !existsSync(`${path}files`)) {
      throw new Error('FS operation failed');
    }
    await mkdir(`${path}files_copy`);
    const files = await readdir(`${path}files`);

    files.forEach((file) =>
      copyFile(`${path}files/${file}`, `${path}files_copy/${file}`)
    );
  } catch (err) {
    console.error(err);
  }
};

copy();
