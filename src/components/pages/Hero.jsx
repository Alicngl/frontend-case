import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import { GiHamburgerMenu } from "react-icons/gi";

const Links = ["Odalar", "Galeri", "İletişim"];
const Hero = () => {
  return (
    <div className=" w-full justify-between flex   p-5 border-b-2 border-solid">
      <div className="flex  space-x-4 items-center">
        <a href="/">
          <p className="text-2xl">otelfiyat</p>
        </a>
        <div className="flex space-x-4 items-center">
          {Links.map((x, index) => (
            <a href="/">
              <p key={index} className="text-sm">
                {x}
              </p>
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-3 hidden md:flex">
        <p>Yardım</p>
        <p>Acenteler</p>
        <button className="border-2 p-2 border-solid rounded-md">
          Giriş Yap
        </button>
      </div>
      <div className="md:hidden items-center ">
        <Menu
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}>
          <MenuHandler>
            <IconButton className="bg-white shadow-none">
              <GiHamburgerMenu color="#333" width={800} height={40} />
            </IconButton>
          </MenuHandler>
          <MenuList>
            <MenuItem>Yardım</MenuItem>
            <MenuItem>Acenteler</MenuItem>
            <MenuItem>Giriş Yap</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Hero;
