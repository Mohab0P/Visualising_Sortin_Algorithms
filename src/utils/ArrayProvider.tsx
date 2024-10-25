import React, { createContext, useContext, useState } from "react";

const ArrayContext = createContext({
  size: 50,
  setSize: (size: number) => {},
  speed: 15,
  setSpeed: (speed: number) => {},
});

export const useArrayContext = () => useContext(ArrayContext);

const ArrayProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
  const [size, setSize] = useState(50);
  const [speed, setSpeed] = useState(15);
  return (
    <ArrayContext.Provider value={{ size, setSize, speed, setSpeed }}>
      {children}
    </ArrayContext.Provider>
  );
};

export default ArrayProvider;
