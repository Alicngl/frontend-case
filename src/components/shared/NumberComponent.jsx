import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const NumberComponent = ({ handleValue, name }) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    handleValue(name, number);
  }, [number]);

  return (
    <div className="flex space-x-4 border-2 border-solid p-3 justify-center">
      <button
        onClick={() => {
          number > 0 && setNumber(number - 1);
        }}>
        <AiOutlineMinus fontSize={"20px"} />
      </button>
      <p className="text-xl">{number}</p>
      <button
        onClick={() => {
          number < 8 && setNumber(number + 1);
        }}>
        <AiOutlinePlus fontSize={"20px"} />
      </button>
    </div>
  );
};

export default NumberComponent;
