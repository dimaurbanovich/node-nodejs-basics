const parseEnv = () => {
  const envs = Object.entries(process.env);

  const result = envs.reduce(
    (acc, curr) =>
      curr[0].includes('RSS_') ? [...acc, `${curr[0]}=${curr[1]};`] : acc,
    []
  );

  console.log(result.join(' '));
};

parseEnv();
