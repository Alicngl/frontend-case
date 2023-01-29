import React, { useEffect, useState } from "react";
import { DATA } from "../../constants";
import RadioComponent from "../shared/RadioComponent";

const Hotels = () => {
  const [data, setData] = useState(DATA);
  const [type, setType] = useState();
  const [view, setView] = useState();
  const handleValue = (e, name) => {
    if (name === "type") {
      setType(e);
    } else {
      setView(e);
    }
  };
  useEffect(() => {
    const filtered = DATA.filter((x) => x.type === type || x.view === view);
    if (filtered.length !== 0) {
      setData(filtered);
    }
  }, [type, view]);

  const component = [
    {
      label: "Dublex Oda",
      value: "dublex",
      name: "type",
    },
    {
      label: "Suite Oda",
      value: "suite",
      name: "type",
    },
    {
      label: "Standart Oda",
      value: "standart",
      name: "type",
    },
    {
      label: "Deniz Manzara",
      value: "sea",
      name: "view",
    },
    {
      label: "Dağ Manzara",
      value: "mount",
      name: "view",
    },
    {
      label: "Kara Manzara",
      value: "overland",
      name: "view",
    },
  ];

  return (
    <div className="w-full justify-center ">
      <div className="grid grid-cols-3  justify-items-center  ">
        {component.map((x, index) => {
          return (
            <div className="justify-items-start  " key={index}>
              <RadioComponent
                label={x.label}
                handleValue={handleValue}
                name={x.name}
                value={x.value}
              />
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
                alt="otels"
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
