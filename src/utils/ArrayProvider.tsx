import React, { createContext, useContext, useState } from "react";

type SortingAlgorithm = 'BubbleSort' | 'SelectionSort' | 'InsertionSort' | 'MergeSort' | 'QuickSort' | 'HeapSort';
const ArrayContext = createContext({
  size: 50,
  setSize: (size: number) => {},
  speed: 15,
  setSpeed: (speed: number) => {},
  sortingAlgorithm: 'BubbleSort' as SortingAlgorithm,
  setSortingAlgorithm: (algorithm: SortingAlgorithm) => {},
});

export const useArrayContext = () => useContext(ArrayContext);

const ArrayProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
  const [size, setSize] = useState(50);
  const [speed, setSpeed] = useState(15);
  const [sortingAlgorithm,setSortingAlgorithm]=useState<SortingAlgorithm>('BubbleSort')
  return (
    <ArrayContext.Provider value={{ size, setSize, speed, setSpeed, sortingAlgorithm, setSortingAlgorithm }}>      {children}
    </ArrayContext.Provider>
  );
};

export default ArrayProvider;
