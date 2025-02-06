function compare(a: any, b: any): number {
  // Type checking and handling
  if (typeof a === 'number' && typeof b === 'number') {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b); // Using localeCompare for string comparison
  } else {
      //handle the case where types are different or not supported
      console.warn('Cannot compare different types: ', typeof a, typeof b);
      return 0; // or throw an error
  }
}

const arr = [1, 2, 3, 4, 5];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5]

const arr2 = [1, '2', 3, '4', 5];
arr2.sort(compare);
console.log(arr2); // Output: [1, 3, 5, '2', '4'] // The output depends on the handling of mixed types in compare function

const arr3: number[] = [1,2,3,'4',5]; // TypeScript will throw error at compile time
console.log(arr3);
