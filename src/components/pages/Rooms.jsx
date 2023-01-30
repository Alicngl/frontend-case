import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import React, { useEffect, useState } from "react";
import { rooms } from "../../constants";

const informations = [
  "Teras",
  "Duş",
  "Elektronik Anahtar",
  "Banyo Ürünleri",
  "WC",
  "Dedektör",
  "Mini Bar",
  "Uydu Sistemi",
  "Mutfak",
  "Banyo",
  "LED TV",
  "Müzik",
  "Kasa",
  "Telefon",
];

const Rooms = () => {
  const [open, setOpen] = useState(false);
  const [slider, setSlider] = useState(window.innerWidth <= 960 ? true : false);

  useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth <= 760 ? setSlider(true) : setSlider(false)
    );
  }, []);
  const handleOpen = () => setOpen(!open);
  console.log(open);

  return (
    <div>
      <div className="space-y-2 ">
        {rooms.map((x, index) => {
          return (
            <div
              key={index}
              className="sm:flex justify-between bg-white items-center rounded-md p-5 space-x-5">
              <div className="sm:flex space-x-5 space-y-2 md:space-y-0">
                <div className="flex justify-center">
                  <img
                    src={x.img}
                    alt="rooms"
                    width={300}
                    className="rounded-md"
                  />
                </div>
                <div>
                  <div className="space-y-4">
                    <p className="text-xl" open={open}>
                      {x.name}
                    </p>
                    <p
                      onClick={handleOpen}
                      className="text-blue-500 cursor-pointer">
                      Detaylı İncelemek İçin Tıklayınız
                    </p>
                    <div className="w-full">
                      <Dialog
                        open={open}
                        handler={handleOpen}
                        size={slider === true ? "xxl" : "lg"}>
                        <DialogHeader>{x.name}</DialogHeader>
                        <DialogBody>
                          <div className="space-y-3">
                            <div className="flex justify-center">
                              <img
                                src={x.img}
                                alt="room"
                                className="rounded-md"
                              />
                            </div>
                            <div className="px-4">
                              <p>
                                Perla Suit Odalar 60 m² büyüklüğünde. 1 Yatak
                                odası ve 1 oturma odası mevcut olup Odalarda
                                çift kişilik bir yatak ve sofa bulunuyor. Odada
                                2 banyo mevcut olup Zemin kısmen halı ve fayans
                                kaplıdır.
                              </p>
                            </div>
                            <div>
                              <div className="grid grid-cols-2 flex justify-center px-4">
                                {informations.map((x, index) => (
                                  <p key={index}>-{x}</p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </DialogBody>
                        <DialogFooter>
                          <Button
                            variant="text"
                            color="red"
                            onClick={handleOpen}
                            className="mr-1">
                            <span>Cancel</span>
                          </Button>
                        </DialogFooter>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>

              <div className="items-center flex">
                <div className="md:space-y-3 space-y-0 space-x-2 md:space-x-0 flex md:block">
                  <div>
                    <Button variant="outlined" fullWidth>
                      Sizi Arayalım
                    </Button>
                  </div>
                  <div>
                    <Button variant="outlined" fullWidth>
                      Rezervasyon{" "}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};

export default Rooms;
