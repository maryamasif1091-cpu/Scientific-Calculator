export const square = (x: number) => x * x;
export const cube = (x: number) => x * x * x;

export const power = (x: number, y: number) => Math.pow(x, y);

export const factorial = (n: number): number => {
  if (n < 0) return NaN;
  let res = 1;
  for (let i = 1; i <= n; i++) res *= i;
  return res;
};