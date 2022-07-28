function quickSort(arr, funcSort) {
  if (arr.length < 2) {
    return arr;
  }
  //195.118
  const left = [],
    right = [],
    startIndex = Math.floor(Math.random() * arr.length),
    reference = arr[startIndex];
  for (let i = 0; i < arr.length; i++) {
    if (startIndex !== i) {
      if (arr[i] >= reference) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  return quickSort(left, funcSort).concat(
    reference,
    quickSort(right, funcSort)
  );
}

const selectionSort = (arr) => {
  for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
    let indexMin = i;
    for (let j = i + 1; j < l; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return arr;
};
let arr = [];
for (let i = 1000000; i > 0; i--) arr.push(Math.floor(Math.random() * 1000));
let start = performance.now();
console.log(quickSort(arr, (a, b) => b - a));
let end = performance.now();
// console.log(selectionSort(arr));
let endSelection = performance.now();

console.log(end - start);
console.log(endSelection - end);
