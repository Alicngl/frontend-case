import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
const PopoverComponent = () => {
  return (
    <div>
      {" "}
      <Popover placement="bottom">
        <PopoverHandler>
          <div className="justify-center">Yetişkin:1</div>
        </PopoverHandler>
        <PopoverContent className="mt-3 z-20">
          <div> This is a very beautiful popover, show some love.</div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PopoverComponent;
