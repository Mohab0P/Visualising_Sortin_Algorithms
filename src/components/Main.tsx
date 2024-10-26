import React from 'react';
import { useArrayContext } from '../utils/ArrayProvider';

type MainProps = {
  className?: string;
};

const Main: React.FC<MainProps> = ({ className }) => {
  const { size, array,sortingAlgorithm } = useArrayContext();

  return (
    <div className={`flex w-full h-full items-end ${className}`}>
      {array.length > 0 ? (
        array.map((value, index) => (
          <div
            key={`${value}-${index}`}
            className={`bar bg-emerald-600 ${sortingAlgorithm=="none"? 'hidden':'block'}`}
            style={{
              height: `${(value / (20 * size)) * 100}%`,
              flex: `1 1 ${100 / array.length}%`,
              margin: '0 1px',
            }}
            id={`${index}`}  // Assign index as id here
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
  );
};

export default Main;
