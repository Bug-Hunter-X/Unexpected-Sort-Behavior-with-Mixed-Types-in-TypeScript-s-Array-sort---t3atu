function compare(a, b) {
  if (a < b) {
    return -1; 
  } else if (a > b) {
    return 1;
  } else {
    return 0; 
  }
}

const arr = [1, 2, 3, 4, 5];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5] (Correct)

const arr2 = [1, '2', 3, '4', 5];
arr2.sort(compare); 
console.log(arr2); //Output: [1, 3, 5, '2', '4'] (Incorrect)