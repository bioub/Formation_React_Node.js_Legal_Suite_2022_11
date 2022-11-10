function range(min, max) {
  if (max < min) {
    throw new Error('max must be higher than min');
  }

  const values = [];

  for (let i=min; i<=max; i++) {
    values.push(i);
  }

  return values;
}

exports.range = range;
