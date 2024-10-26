import React from "react";
import { useArrayContext } from "../utils/ArrayProvider";

type MainProps = {
  className?: string; // Make className optional
};
const Main: React.FC<MainProps> = ({ className }) => { 
   const { size, array, } = useArrayContext();
  //  const barWidth=100/size;
  return (
    <>
    <div className={`flex w-full h-full items-end ${className}  `}>
      {array.length > 0 ? (
        array.map((value, index) => (
          <div
          key={`${value}-${index}`}
          className="bg-emerald-600 max-w-56 "
          style={{
            height: `${(value / (20 * size)) * 100}%`, // Adjusted for better height calculation
            // width: `${barWidth}%`, // Adjusted for better width calculation
            flex: `1 1 ${100 / array.length}%`, // Makes bars responsive
            margin: "0 1px", // Optional margin to space out the bars
          }}
          id={`${index}`}
          >
            <span className={`${array.length >= 50 ? 'hidden' : 'block'} text-white text-xs`}>
              {value}
            </span>
          </div>
        ))
      ) : (
        <p className="text-red-500 text-center w-full">No bars to display</p>
      )}
    </div>
    {/* <p className="text-center text-white">{array.join()}</p> */}
        </>
  );
};

export default Main;
