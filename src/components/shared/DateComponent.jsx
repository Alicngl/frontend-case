import React, { useEffect, useState } from "react";

const DateComponent = ({ handleValue, name }) => {
  const [date, setDate] = useState({ name: name, value: "" });
  useEffect(() => {
    handleValue(date.name, date.value);
  }, [date]);

  return (
    <div className="border-solid ">
      <input
        type="date"
        className="border-solid border-2 rounded-md p-1"
        onChange={(e) => {
          setDate({ ...date, ["value"]: e.target.value });
        }}
      />
    </div>
  );
};

export default DateComponent;
