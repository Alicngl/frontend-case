import React from "react";
import { Input } from "@material-tailwind/react";
import {AiOutlineSearch} from "react-icons/ai"
const InputComponent = () => {
  return (
    <div>
      <Input variant="static" size="lg" label="Nereye Gitmek İstersin" icon={<AiOutlineSearch/>}/>
    </div>
  );
};

export default InputComponent;
