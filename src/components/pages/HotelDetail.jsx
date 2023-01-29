import React, { useEffect, useState } from "react";
import { DATA } from "../../constants";
import { MdLocationOn } from "react-icons/md";
const HotelDetail = ({ id }) => {
  const [detailItem, setDetailItem] = useState();

  useEffect(() => {
    console.log(typeof id);
    const filtered = DATA.filter((x) => x.id === Number(id));
    setDetailItem(filtered);
  }, [id]);
  console.log(detailItem, "ITEM");

  return (
    <div>
      <div className="flex justify-center pt-5">
        {detailItem &&
          detailItem.map((x, index) => {
            return (
              <div key={index}>
                <div>
                  <h1 className="text-3xl">{x.name}</h1>
                  <div className="flex items-center">
                    <MdLocationOn size={20}/>
                    <h2>{x.location}</h2>
                  </div>
                </div>
                <div className="flex space-x-5 ">
                  <div>
                    <img
                      src={x.img}
                      alt="otels"
                      width={600}
                      className="rounded-md"
                    />
                  </div>
                  <div className="space-y-5 ">
                    <div className="shadow-md p-5 bg-white rounded-md">
                      <p>%27'ye varan erken rezervasyon inirimleri</p>
                    </div>
                    <div className="flex shadow-md p-3 bg-white rounded-md items-center space-x-4">
                      <div>
                        <p className="text-3xl bg-green-500	text-white p-2 rounded-lg">
                          7.3
                        </p>
                      </div>
                      <div>
                        <p className="text-xl">İyi</p>
                        <p className="font-bold text-green-200">
                          %60 tavsiye ediliyor
                        </p>
                      </div>
                    </div>
                    <div className="shadow-md p-5 bg-white rounded-md flex">
                      <MdLocationOn size={35} />
                      <p>
                        ULAŞIM Antalya Gazipaşa - Alanya <br /> Havalimanı 67.84
                        km,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HotelDetail;
