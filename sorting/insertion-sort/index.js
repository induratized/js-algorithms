import { doTheSwap } from "../../utilityityity";

// best case - O(n)
// worst case - O(n^2)

const unsorted = [1,234,21,435,543,5,09,3,345]
// const unsorted = [8,4,6,2,4,3,2]


function insertionSort(unsorted) {
  for ( let i = 1; i < unsorted.length; i++) {
    let hole = i;
    let valueToInsert = unsorted[i];
    while(hole > 0 && unsorted[hole - 1] > valueToInsert) {
      doTheSwap(unsorted, hole-1, hole)
      hole--;
    }
    unsorted[hole] = valueToInsert
  }
  
  return unsorted;
}

console.log(insertionSort(unsorted))