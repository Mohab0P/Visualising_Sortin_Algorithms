// Function to merge two sorted halves of the array
const merge = (arr: number[], left: number, mid: number, right: number, animArr: number[][]) => {
  let leftArr = arr.slice(left, mid + 1);
  let rightArr = arr.slice(mid + 1, right + 1);

  let i = 0, j = 0, k = left;

  // Merge the two halves back into arr[]
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      animArr.push([k, leftArr[i]]); // Track each merge step
      i++;
    } else {
      arr[k] = rightArr[j];
      animArr.push([k, rightArr[j]]); // Track each merge step
      j++;
    }
    k++;
  }

  // Copy any remaining elements from leftArr
  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    animArr.push([k, leftArr[i]]);
    i++;
    k++;
  }

  // Copy any remaining elements from rightArr
  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    animArr.push([k, rightArr[j]]);
    j++;
    k++;
  }
};

// Recursive merge sort helper
const mergeSortHelper = (arr: number[], left: number, right: number, animArr: number[][]) => {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);

    // Sort first and second halves
    mergeSortHelper(arr, left, mid, animArr);
    mergeSortHelper(arr, mid + 1, right, animArr);

    // Merge sorted halves
    merge(arr, left, mid, right, animArr);
  }
};

export const MergeSort = (array: number[]) => {
  const dupBlocks: number[] = array.slice(); // Create a copy of the array to sort
  const animArr: number[][] = []; // Array to store animation steps

  mergeSortHelper(dupBlocks, 0, dupBlocks.length - 1, animArr); // Initial call to the recursive function
  return { dupBlocks, animArr }; // Return the sorted array and animation steps
};
