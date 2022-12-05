import { cpus } from 'os';
import { Worker, workerData } from 'worker_threads';

const performCalculations = async () => {
  const cp = cpus();
  let num = 10;

  const workers = await Promise.allSettled(
    cp.map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker('./src/wt/worker.js', {
          workerData: num++,
        });

        worker.on('message', (msg) => resolve(msg));
        worker.on('error', (msg) => reject(msg));
      });
    })
  );

  const results = workers.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: status === 'fulfilled' ? value : null,
  }));

  console.log(results);
};

await performCalculations();
