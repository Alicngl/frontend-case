import React, { useState } from "react";
import DateComponent from "../shared/DateComponent";
import InputComponent from "../shared/InputComponent";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import NumberComponent from "../shared/NumberComponent";
const FormControl = () => {
  const [data, setData] = useState({
    entry: "",
    exit: "",
    person: 0,
    children: 0,
  });

  const handleValue = (name, e) => {
    setData({ ...data, [name]: e });
  };

  return (
    <div className="flex space-x-2 items-center justify-center  p-3 ">
      <div className="block md:flex items-center  p-4  w-full justify-around max-w-6xl md:space-y-0 space-y-3">
        <div className="border-2 border-solid rounded-md pt-3 px-2">
          <InputComponent />
        </div>
        <div className="block md:flex border-solid border-2  pt-3 px-2 rounded-md md:space-y-0 space-y-3">
          <DateComponent handleValue={handleValue} name="entry" label="Giriş" />
          <DateComponent handleValue={handleValue} name="exit" label="Çıkış" />
        </div>
        <div className="border-2 border-solid rounded-md py-3 ">
          <Popover placement="bottom">
            <PopoverHandler className="cursor-pointer flex space-x-4  pt-2 pb-1 px-3 border-gray-300 rounded-md">
              <div className="flex space-x-4">
                <p className="justify-center">Yetişkin {data.person}</p>
                <p>Çocuk {data.children}</p>
              </div>
            </PopoverHandler>
            <PopoverContent className="mt-1 z-20 space-y-4">
              <div className="space-y-1">
                <p>Yetişkin Sayısı </p>
                <NumberComponent handleValue={handleValue} name="person" />
              </div>
              <div className="space-y-1">
                <p>Çocuk Sayısı </p>
                <NumberComponent handleValue={handleValue} name="children" />
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="">
          <button className="bg-blue-400 rounded-md text-white px-5 py-5">
            ARA
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormControl;
