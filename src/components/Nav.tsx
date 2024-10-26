import { useArrayContext } from "../utils/ArrayProvider";
import { BubbleSort } from "../algorithms/BubbleSort";
import animateDivs from "../utils/AnimateDivs";
type NavProps = {
  className?: string; // Make className optional
};
const Nav: React.FC<NavProps> = ({ className }) => {
  const {
    size,
    setSize,
    speed,
    setSpeed,
    sortingAlgorithm,
    setSortingAlgorithm,
    array,
    setArray
  } = useArrayContext();

  const sort = () => {
    switch (sortingAlgorithm) {
      case "BubbleSort": {
        const { dupBlocks, animArr } = BubbleSort(array);
        animateDivs(dupBlocks, animArr, speed, setArray);
        break;
      }
      case "SelectionSort":
        console.log("Selection Sort");
        break;
      case "MergeSort":
        console.log("Merge Sort");
        break;
      case "QuickSort":
        console.log("Quick Sort");
        break;
      case "HeapSort":
        console.log("Heap Sort");
        break;
      default:
        console.log("Select a sorting algorithm first!");
    }
  };

  return (
    <nav className={`w-screen bg-gray-800 grid grid-flow-row ${className} `}>
      <div className="flex items-center justify-center w-full gap-4 my-5">
        <span className="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-900">
          <span className="relative text-white text-3xl">
            <span className="relative">S</span>
            <span className="relative">o</span>
            <span className="relative">r</span>
            <span className="relative">t</span>
            <span className="relative inline-block i-dot">I</span>
            <span className="relative">n</span>
            <span className="relative">g</span>
            <span className="relative ml-3">V</span>
            <span className="relative inline-block i-dot">I</span>
            <span className="relative">s</span>
            <span className="relative">u</span>
            <span className="relative">a</span>
            <span className="relative">l</span>
            <span className="relative inline-block i-dot">I</span>
            <span className="relative">z</span>
            <span className="relative">e</span>
            <span className="relative">r</span>
          </span>
        </span>

        <button
          className={`${
            sortingAlgorithm == "BubbleSort"
              ? " bg-red-500 hover:bg-red-700"
              : "bg-blue-500"
          }   hover:animate-bounce hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl transition-all active:scale-95`}
          onClick={() => setSortingAlgorithm("BubbleSort")}
        >
          Bubble Sort
        </button>
        <button
          className={`${
            sortingAlgorithm == "SelectionSort"
              ? " bg-red-500 hover:bg-red-700"
              : "bg-blue-500"
          } hover:bg-blue-700 hover:animate-bounce text-white font-bold py-2 px-4 rounded text-xl  transition-all active:scale-95 `}
          onClick={() => setSortingAlgorithm("SelectionSort")}
        >
          Selection Sort
        </button>
        <button
          className={`${
            sortingAlgorithm == "MergeSort"
              ? " bg-red-500 hover:bg-red-700"
              : "bg-blue-500"
          } hover:bg-blue-700 hover:animate-bounce text-white font-bold py-2 px-4 rounded tet-xl  transition-all active:scale-95`}
          onClick={() => setSortingAlgorithm("MergeSort")}
        >
          Merge Sort
        </button>
        <button
          className={`${
            sortingAlgorithm == "QuickSort"
              ? "bg-red-500 hover:bg-red-700"
              : "bg-blue-500"
          } hover:bg-blue-700 hover:animate-bounce text-white font-bold py-2 px-4 rounded text-xl  transition-all active:scale-95`}
          onClick={() => setSortingAlgorithm("QuickSort")}
        >
          Quick Sort
        </button>
        <button
          className={`${
            sortingAlgorithm == "HeapSort"
              ? "bg-red-500 hover:bg-red-700"
              : "bg-blue-500"
          } hover:bg-blue-700 hover:animate-bounce text-white font-bold py-2 px-4 rounded text-xl  transition-all active:scale-95`}
          onClick={() => setSortingAlgorithm("HeapSort")}
        >
          Heap Sort
        </button>
        <button
          className="bg-emerald-600 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded text-xl underline  transition-all active:scale-95 "
          onClick={() => sort()}
        >
          Start
        </button>
      </div>
      <div className="flex flex-col items-center w-full">
        <label htmlFor="Items_amount" className="text-amber-600 text-2xl">
          {" "}
          The Size Of An Array ={" "}
          <span id="Size" className="text-red-500 text-3xl">
            {size}
          </span>{" "}
        </label>
        <input
          type="range"
          name="Items_amount"
          id="Items_amount"
          className="w-full max-w-xl py-3 "
          defaultValue={50}
          min={1}
          max={250}
          onChange={(e) => setSize(parseInt(e.target.value))}
        />
      </div>
      <div className="flex flex-col items-center w-full">
        <label htmlFor="delay" className="text-green-600 text-2xl">
          {" "}
          Sotring Speed ={" "}
          <span id="Speed" className="text-red-500 text-3xl">
            {speed}
          </span>{" "}
        </label>

        <input
          type="range"
          name="delay"
          id="delay"
          className="w-full max-w-xl py-3 "
          min={3}
          defaultValue={15}
          max={100}
          onChange={(e) => setSpeed(parseInt(e.target.value))}
        />
      </div>
    </nav>
  );
};

export default Nav;
