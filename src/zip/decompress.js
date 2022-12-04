import fs, { existsSync } from 'fs';
import zlib from 'zlib';
import { rm } from 'fs/promises';

const decompress = async () => {
  try {
    if (!existsSync('./src/zip/files/archive.gz')) {
      throw new Error('FS operation failed');
    }
    const unzip = zlib.createUnzip();

    const readStream = fs.createReadStream('./src/zip/files/archive.gz');

    const writeStream = fs.createWriteStream(
      './src/zip/files/fileToCompress.txt'
    );

    readStream.pipe(unzip).pipe(writeStream);

    await rm('./src/zip/files/archive.gz');
  } catch (err) {
    console.error(err);
  }
};

await decompress();
