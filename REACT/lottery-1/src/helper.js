export function genNumber(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}

export function sum(arr) {
  let result = arr.reduce((sum, curr) => sum + curr, 0);
  return result;
}
