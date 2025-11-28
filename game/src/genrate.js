export function Genrate(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}

export function Sum(arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
}
