const swap = (arr: number[], i: number, j: number) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

export const QuickSort = (array: number[]) => {
  const dupBlocks: number[] = array.slice(); // Create a copy of the array to sort
  const animArr: number[][] = []; // Array to store animation steps

  const quickSortHelper = (arr: number[], low: number, high: number) => {
    if (low < high) {
      const pivot = arr[high]; // Choose the last element as pivot
      let i = low - 1; // Pointer for the smaller element

      // Partition the array
      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++; // Increment index for the smaller element
          swap(arr, i, j); // Swap if element is smaller than the pivot
          animArr.push([i, j]); // Record the animation step
        }
      }

      // Swap the pivot element with the element at i + 1
      swap(arr, i + 1, high);
      animArr.push([i + 1, high]); // Record the animation step

      // Recursively sort the left and right parts
      quickSortHelper(arr, low, i); // Sort left part
      quickSortHelper(arr, i + 2, high); // Sort right part
    }
  };

  quickSortHelper(dupBlocks, 0, dupBlocks.length - 1); // Initial call to the recursive function
  return { dupBlocks, animArr }; // Return the sorted array and animation steps
};
