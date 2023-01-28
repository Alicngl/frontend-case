import React, { useEffect, useState } from "react";
import { DATA } from "../../constants";
import RadioComponent from "../shared/RadioComponent";

const Hotels = () => {
  const [data, setData] = useState(DATA);
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
  useEffect(() => {
    const filtered = DATA.filter((x) => x.type === type || x.view === view);
    if (filtered.length != 0) {
      setData(filtered);
    }
    console.log(filtered);
  }, [type, view]);

  const component = [
    {
      comp: (
        <RadioComponent
          label={"Dublex Oda"}
          value="dublex"
          handleValue={handleValue}
          name="type"
        />
      ),
    },
    {
      comp: (
        <RadioComponent
          label={"Suite Oda"}
          value="suite"
          handleValue={handleValue}
          name="type"
        />
      ),
    },
    {
      comp: (
        <RadioComponent
          label={"Standart Oda"}
          value="standart"
          handleValue={handleValue}
          name="type"
        />
      ),
    },
    {
      comp: (
        <RadioComponent
          label={"Deniz Manzara"}
          value="sea"
          handleValue={handleValue}
          name="view"
        />
      ),
    },
    {
      comp: (
        <RadioComponent
          label={"Dağ Manzara"}
          value="mount"
          handleValue={handleValue}
          name="view"
        />
      ),
    },
    {
      comp: (
        <RadioComponent
          label={"Kara Manzara"}
          value="overland"
          handleValue={handleValue}
          name="view"
        />
      ),
    },
  ];

  return (
    <div className="w-full justify-center ">
      <div className="grid grid-cols-3  justify-items-center  ">
        {component.map((x, index) => {
          return (
            <div className="justify-items-start  " key={index}>
              {x.comp}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-4 justify-items-center p-5">
        {data.map((x, index) => {
          return (
            <div className="p-5" key={index}>
              <img
                src={x.img}
                alt=""
                width={"250px"}
                height="200px"
                className=" max-h-[9rem] rounded-md"
              />
              <p>{x.name}</p>
              <div className="flex justify-between">
                <p>
                  {x.type} - {x.view}
                </p>
                <p>{x.price} ₺</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hotels;
