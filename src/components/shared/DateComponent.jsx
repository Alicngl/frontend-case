import { Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

const DateComponent = ({ handleValue, name, label }) => {
  const [date, setDate] = useState({ name: name, value: "" });
  useEffect(() => {
    handleValue(date.name, date.value);
  }, [date]);

  return (
    <div className="border-solid ">
      <Input
        variant="static"
        size="lg"
        label={label}
        type="date"
        onChange={(e) => {
          setDate({ ...date, value: e.target.value });
        }}
      />
    </div>
  );
};

export default DateComponent;
