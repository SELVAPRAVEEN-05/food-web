"use client";
import { useState } from "react";
import { Button } from "@heroui/button";

import { Logo } from "../../assets";


export const TopBar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");
  
  const menuList = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Menu", link: "/menu" },
    { name: "Pages", link: "/pages" },
    { name: "Contact", link: "/contact" },
  ];
  
  return (
    <div
      className={`w-full flex items-center justify-between  py-3 px-[7.5rem] `}
    >
      <div className="">
        <Logo />
      </div>
      <div className="flex items-center mt-2">
        {menuList?.map((item, index) => (
          <a
            key={index}
            onClick={() => setSelectedItem(item?.name || "")}
            href={item?.link}
            className={`lg:px-[1rem] mr-3 xl:px-[1rem] 2xl:px-[1rem] text-[#2C2F24] py-1 cursor-pointer text-[1rem] md:px-[0.5rem] sm:px[0.2rem] ${
              selectedItem === item?.name ? "bg-[#e4e6dc] rounded-full" : ""
            }`}
          >
            {item?.name}
          </a>
        ))}
      </div>
      <div>
        <Button className="rounded-full border-[#2C2F24]" variant="bordered">
          Book A Table
        </Button>
      </div>
    </div>
  );
};
