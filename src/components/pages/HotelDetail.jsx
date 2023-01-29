import React, { useEffect, useState } from "react";
import { DATA, image } from "../../constants";
import { MdLocationOn } from "react-icons/md";
import { Carousel } from "react-carousel-minimal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const HotelDetail = ({ id }) => {
  const [detailItem, setDetailItem] = useState();

  useEffect(() => {
    console.log(typeof id);
    const filtered = DATA.filter((x) => x.id === Number(id));
    setDetailItem(filtered);
  }, [id]);
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
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
                    <MdLocationOn size={20} />
                    <h2>{x.location}</h2>
                  </div>
                </div>
                <div className="block sm:flex space-y-5 sm:space-y-0 space-x-0 sm:space-x-5 ">
                  <div className="px-2">
                    <Carousel
                      data={image}
                      time={2000}
                      width="485px"
                      height="45vh"
                      captionStyle={captionStyle}
                      radius="10px"
                      slideNumber={true}
                      slideNumberStyle={slideNumberStyle}
                      captionPosition="bottom"
                      automatic={true}
                      dots={true}
                      pauseIconColor="white"
                      pauseIconSize="40px"
                      slideBackgroundColor="darkgrey"
                      slideImageFit="cover"
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="space-y-5 max-w-xs sm:max-w-full justify-center">
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
                          ULAŞIM Antalya Gazipaşa - Alanya <br /> Havalimanı
                          67.84 km,
                        </p>
                      </div>
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
