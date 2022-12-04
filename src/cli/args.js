const parseArgs = () => {
  const args = process.argv.slice(2);

  const result = args.reduce((acc, curr, index) => {
    return index % 2 === 0
      ? [...acc, `${curr.replace('--', '')} is`]
      : [...acc, `${curr},`];
  }, []);

  console.log(result.join(' '));
};

parseArgs();
