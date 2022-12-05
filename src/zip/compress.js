import fs, { existsSync } from 'fs';
import zlib from 'zlib';
import { rm } from 'fs/promises';

const compress = async () => {
  try {
    if (!existsSync('./src/zip/files/fileToCompress.txt')) {
      throw new Error('FS operation failed');
    }
    const gzip = zlib.createGzip();

    const readStream = fs.createReadStream(
      './src/zip/files/fileToCompress.txt',
      'utf-8'
    );

    const writeStream = fs.createWriteStream('./src/zip/files/archive.gz');

    readStream.pipe(gzip).pipe(writeStream);

    await rm('./src/zip/files/fileToCompress.txt');
  } catch (err) {
    console.error(err);
  }
};

await compress();
