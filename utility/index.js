export function doTheSwap(array, iLeft, iRight) {
  let temp = array[iLeft];
  array[iLeft] = array[iRight];
  array[iRight] = temp;
  
  return array;
}
