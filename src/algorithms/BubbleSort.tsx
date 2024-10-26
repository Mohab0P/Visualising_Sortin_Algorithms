const swap = (array: number[], i: number, j: number) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

export const BubbleSort = (array: number[], sortType: string) => {
  const dupBlocks: number[] = array.slice();
  const animArr: number[][] = [];
  const startTime = performance.now();

  const isAscending = sortType === ">";
  
  for (let i = 0; i < dupBlocks.length; i++) {
    for (let j = 0; j < dupBlocks.length - i - 1; j++) {
      const condition = isAscending ? dupBlocks[j] > dupBlocks[j + 1] : dupBlocks[j] < dupBlocks[j + 1];
      if (condition) {
        animArr.push([j, j + 1]);
        swap(dupBlocks, j, j + 1);
      }
    }
  }

  const endTime = performance.now();
  const timeTaken = endTime - startTime; 
  console.log(`Time taken: ${timeTaken.toFixed(2)}ms`); // Log with two decimal precision
  return { dupBlocks, animArr, timeTaken };
};
