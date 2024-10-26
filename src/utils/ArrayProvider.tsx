import React, { createContext, useContext, useEffect, useState } from "react";

type SortingAlgorithm = 'none'|'BubbleSort' | 'SelectionSort' | 'InsertionSort' | 'MergeSort' | 'QuickSort' | 'HeapSort';


const ArrayContext = createContext({
  size: 50,
  setSize: (size: number) => {},
  speed: 15,
  setSpeed: (speed: number) => {},
  sortingAlgorithm: 'none' as SortingAlgorithm,
  setSortingAlgorithm: (algorithm: SortingAlgorithm) => {},
  array: [] as number[],
  setArray: (newArray: number[]) => {},
 
  sorted: false,
  setSorted: (sorted: boolean) => {},
  raing: false,
  setRaining: (raining: boolean) => {},
});

export const useArrayContext = () => useContext(ArrayContext);

const ArrayProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
  const [size, setSize] = useState(20);
  const [speed, setSpeed] = useState(15);
  const [sortingAlgorithm,setSortingAlgorithm]=useState<SortingAlgorithm>('none')
  const [array,setArray]=useState<number[]>([])
  const [sorted,setSorted]=useState <boolean>(false)
  const [raing,setRaining]=useState<boolean>(false)

  useEffect(()=>{
    const generateArray:() => void=()=>{
    const newArray=Array.from({length:size},()=>Math.floor(Math.random()*20*size));
    setArray(newArray);
    };
    generateArray();
  },[size,sortingAlgorithm])


  return (
    <ArrayContext.Provider value={{ size, setSize, speed, setSpeed, sortingAlgorithm, setSortingAlgorithm,array,setArray,sorted,setSorted ,raing ,setRaining }}>      {children}
    </ArrayContext.Provider>
  );
};

export default ArrayProvider;
