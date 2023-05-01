const normalizePort = (val: any) => {
  const port = val;

  if (typeof (val = 'string')) {
    const port = parseInt(val, 10);
  }

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

export default normalizePort;
