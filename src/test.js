let arr = [1, 2, 3, 4, 5, 6];
let arr1 = [1, 2, 2, 4, 5, 6];

function test(a, b) {
  for (i = 0; i < 6; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
console.log(test(arr, arr1));
