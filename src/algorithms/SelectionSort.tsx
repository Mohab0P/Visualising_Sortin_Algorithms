const swap = (arr: number[], i: number, j: number) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

export const SelectionSort = (array: number[]) => {
  const dupBlocks: number[] = array.slice(); // Create a copy of the array to sort
  const animArr: number[][] = []; // Array to store animation steps

  // Selection Sort algorithm
  for (let i = 0; i < dupBlocks.length - 1; i++) {
    let minIndex = i; // Assume the minimum is the first element of the unsorted part

    // Find the index of the minimum element in the unsorted part
    for (let j = i + 1; j < dupBlocks.length; j++) {
      if (dupBlocks[j] < dupBlocks[minIndex]) {
        minIndex = j; // Update the index of the minimum element
      }
    }

    // Swap the found minimum element with the first element of the unsorted part
    if (minIndex !== i) {
      swap(dupBlocks, i, minIndex); // Only swap if a new minimum was found
      animArr.push([i, minIndex]); // Record the animation step
    }
  }

  return { dupBlocks, animArr }; // Return the sorted array and animation steps
};
