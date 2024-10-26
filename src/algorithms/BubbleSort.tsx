// BubbleSort.tsx

const swap = (array: number[], i: number, j: number) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  
  export const BubbleSort = (array: number[]) => {
    const dupBlocks: number[] = array.slice();
    const animArr: number[][] = []; 

    const startTime = performance.now();

    for (let i = 0; i < dupBlocks.length; i++) {
      for (let j = 0; j < dupBlocks.length - i - 1; j++) {
        if (dupBlocks[j] > dupBlocks[j + 1]) {
          animArr.push([j, j + 1]);
          swap(dupBlocks, j, j + 1);
        }
      }
    }
    const endTime = performance.now();
    const timeTaken = endTime - startTime; 
    console.log(`Time taken: ${timeTaken}ms`);
    return { dupBlocks, animArr, timeTaken };
  };
  