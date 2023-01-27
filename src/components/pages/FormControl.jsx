import React, { useState } from "react";
import DateComponent from "../shared/DateComponent";
import InputComponent from "../shared/InputComponent";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
const FormControl = () => {
  const [data, setData] = useState({
    entry: "",
    exit: "",
    person: 0,
    children: 0,
  });

  const handleValue = (name, e) => {
    // console.log(e, name, "asdasd");
    setData({ ...data, [name]: e });
  };
  console.log(data, "DATA");

  return (
    <div className="flex space-x-2 items-center w-full justify-center  p-3">
      <div className="justify-center flex items-center space-x-8 p-2 bg-white">
        <DateComponent handleValue={handleValue} name="entry" />
        <DateComponent handleValue={handleValue} name="exit" />
        <Popover placement="bottom">
          <PopoverHandler className="cursor-pointer flex space-x-4">
            <div className="flex space-x-4">
              <p className="justify-center">Yetişkin {data.person}</p>
              <p>Çocuk {data.children}</p>
            </div>
          </PopoverHandler>
          <PopoverContent className="mt-1 z-20 space-y-4">
            <div className="space-y-1">
              <p>Yetişkin Sayısı </p>
              <InputComponent handleValue={handleValue} name="person" />
            </div>
            <div className="space-y-1">
              <p>Çocuk Sayısı </p>
              <InputComponent handleValue={handleValue} name="children" />
            </div>
          </PopoverContent>
        </Popover>
        <button className="bg-yellow-700 rounded-sm text-white px-4 py-2">ARA</button>
      </div>
    </div>
  );
};

export default FormControl;
