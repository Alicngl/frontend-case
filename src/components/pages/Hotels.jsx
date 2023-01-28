import React, { useState } from "react";
import RadioComponent from "../shared/RadioComponent";

const Hotels = () => {
  const [type, settype] = useState();
  const [view, setView] = useState();
  const handleValue = (e, name) => {
    console.log(e, name);
    if (name === "type") {
      settype(e);
    } else {
      setView(e);
    }
  };
  const component = [
    {
      comp: (
        <RadioComponent
          label={"Dublex"}
          value="dublex"
          handleValue={handleValue}
          name="type"
        />
      ),
    },
    {
      comp: (
        <RadioComponent
          label={"Suite"}
          value="suite"
          handleValue={handleValue}
          name="type"
        />
      ),
    },
    {
      comp: (
        <RadioComponent
          label={"Standart"}
          value="standart"
          handleValue={handleValue}
          name="type"
        />
      ),
    },
    {
      comp: (
        <RadioComponent
          label={"Deniz"}
          value="sea"
          handleValue={handleValue}
          name="view"
        />
      ),
    },
    {
      comp: (
        <RadioComponent
          label={"Dağ"}
          value="mount"
          handleValue={handleValue}
          name="view"
        />
      ),
    },
    {
      comp: (
        <RadioComponent
          label={"Kara"}
          value="overland"
          handleValue={handleValue}
          name="view"
        />
      ),
    },
  ];

  console.log(type, ":type", view, ":view");
  return (
    <div className="w-full justify-center flex">
      <div className="grid grid-cols-3  items-center  max-w-7xl">
        {component.map((x, index) => {
          return (
            <div className="justify-end w-full ml-3" key={index}>
              {x.comp}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hotels;
