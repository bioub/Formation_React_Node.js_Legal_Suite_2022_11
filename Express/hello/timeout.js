function timeout(delayMs, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delayMs);
  });
}

exports.timeout = timeout;
