import React from "react";
const Links = ["Anasayfa", "Oda Türleri", "Galeri", "İletişim"];
const Hero = () => {
  return (
    <div className=" w-full flex justify-center my-5">
      <div className="flex justify-between max-w-7xl min-w-[70%]">
        <a href="/">
          <p className="text-3xl">otelfiyat.com</p>
        </a>
        <div className="flex space-x-4 items-center">
          {Links.map((x, index) => (
            <a href="/">
              <p key={index}>{x}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
