const array = [2,4,1,3,7,5,6,9,8]

function mergeSort(arr) {
  // exit cases
  if(!arr || arr.length == 0) {
    return [];
  }
  
  if(arr.length == 1) {
    console.log(arr)
    return arr
  }
  
  let pivot = Math.floor(arr.length/2)
  
  return mergeSortedArray(mergeSort(arr.slice(0, pivot)), mergeSort(arr.slice(pivot, arr.length)))
}

function mergeSortedArray(arrA, arrB) {
  let arrALen = arrA.length;
  let arrBLen = arrB.length;
  let merged = []
  let iA = 0
  let iB = 0
  let iM = 0
  
  while(iA < arrALen && iB < arrBLen) {
    if(arrA[iA] <= arrB[iB]) {
      merged[iM] = arrA[iA]
      iA++;
    } else {
      merged[iM] = arrB[iB]
      iB++
    }
    iM++;
  }
  
  while (iA < arrALen) {
    merged[iM] = arrA[iA]
    iA++; 
    iM++;
  }
  
  while (iB < arrBLen) {
    merged[iM] = arrB[iB]
    iB++; 
    iM++;
  }
  
  console.log(merged)
  return merged
}


console.log(mergeSort(array))