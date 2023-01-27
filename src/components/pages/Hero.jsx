import React from "react";

const Hero = () => {
  return (
    <div className=" w-full flex justify-center my-5">
      <div className="flex justify-between max-w-7xl min-w-[70%]">
        <p className="text-3xl">otelfiyat.com</p>
        <div className="flex space-x-4 items-center">
          <p>Anasayfa</p>
          <p>Oda Türleri</p>
          <p>Galeri</p>
          <p>İletişim</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
