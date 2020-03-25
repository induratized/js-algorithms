import {doTheSwap} from '../../utility';
const unsorted = [1,234,21,435,543,5,09,3,345]
// const unsorted = [8,4,6,2,4,3,2]


function selectionSort(unsorted) {
  for(let i = 0; i < unsorted.length - 1; i++) {
    let minIndex = i;
    for(let j = i+1; j < unsorted.length; j++) {
      if(unsorted[j] < unsorted[minIndex]) {
        minIndex = j;
      }
    }
    
    if(unsorted[i] > unsorted[minIndex]) {
      doTheSwap(unsorted, i, minIndex);
    }
  }
  
  return unsorted;
}

console.log(selectionSort(unsorted));