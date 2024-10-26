import {useArrayContext} from "../utils/ArrayProvider";

const Main = () => {
    const {size,sortingAlgorithm} = useArrayContext()


    return (
        <div className="flex flex-row justify-center ">
            <h1>{sortingAlgorithm}</h1>
          {Array.from({ length: size }).map((_, i) => (
            <div key={i} className="h-10 w-3 bg-blue-500 m-1"></div>
          ))}
        </div>
      );
    }
 
export default Main;