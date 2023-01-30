import React, { useEffect, useState } from "react";
import { Radio } from "@material-tailwind/react";

const RadioComponent = ({ label, value, handleValue, name }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked === true) {
      handleValue(value, name);
    }
  }, [checked]);
  return (
    <div>
      <Radio
        className="text-sm"
        id="html"
        name={name}
        value={value}
        label={label}
        onChange={(e) => {
          setChecked(!checked);
        }}
      />
    </div>
  );
};

export default RadioComponent;
