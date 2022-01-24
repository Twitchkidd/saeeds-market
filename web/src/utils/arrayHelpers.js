export const range = (n) => [...Array(n).keys()].map((x) => x + 1);

export const arrayEquals = (a, b) =>
  Array.isArray(a) &&
  Array.isArray(b) &&
  a.length === b.length &&
  a.every((val, index) => val === b[index]);
