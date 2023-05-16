/**
 * HOMEWORK: Due Tuesday the 16th
 * Loop through an array of 5 random numbers (include negative numbers). Sort the numbers and print a new array. CANT USE THE SORT() OR FUNCTIONS.
 *
 * EXAMPLE
 * Input: [4,-3,5,7,10]
 * Expected Output: [-3, 4,5,7,10]
 *
 * Used whatever you learned from past lessons
 */

let arr1 = [4, 7, 5, -3, 10];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] > arr1[j + 1]) {
      let int = arr1[j];
      arr1[j] = arr1[j + 1];
      arr1[j + 1] = int;
    }
  }
}

console.log(arr1);
