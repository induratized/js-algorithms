import { doTheSwap } from "../../utility";

const array = [2,8,1,3,7,5,6,9,4]

function quickSort(arr, start, end) {
  if(start >= end) {
    return;
  }
  
  let pIndex = partition(arr, start, end);
  
  quickSort(arr, start, pIndex-1);
  quickSort(arr, pIndex+1, end)
  
  return arr
}

// my way - 3 swaps; one extra instruction every 
function partition(arr, start, end) {
  let pIndex = end;
  let rsi = pIndex
  
  while(rsi > start) {
    if(arr[pIndex] < arr[rsi - 1]) {
      shiftTheLowBlockRight(arr, pIndex, rsi);
      pIndex--;
      rsi--
    } else {
      rsi--;
    }
  }

//   console.log('pIndex - '+pIndex)
  return pIndex;
}

// better way in mycodeschool - one swap
function betterPartition(arr, start, end) {
    let pIndex = start;
    pivot = arr[end];

    for (let i = start; i < end; i++) {
        if(arr[i] <= pivot) {
            doTheSwap(arr, i, pIndex);
            pIndex++
        }
    }
    doTheSwap(arr, i, pIndex);

    return pIndex;
}

function shiftTheLowBlockRight(arr, pivot, rsi) {
  let temp = arr[pivot];
  arr[pivot] = arr[rsi-1];
  arr[rsi-1] = arr[pivot-1];
  arr[pivot-1] = temp;
}

console.log(quickSort(array, 0, array.length-1))
//   console.log('arr - '+array)