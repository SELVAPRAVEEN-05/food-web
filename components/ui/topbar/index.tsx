"use client";
import { useState } from "react";
import { Button } from "@heroui/button";
import { IoReorderThree } from "react-icons/io5";
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
      className={`w-full flex items-center justify-between py-3 md:px-[40px] lg:px-[5rem] xl:px-[7.5rem] `}
    >
      <div className="hidden">
        <IoReorderThree />
      </div>
      <div className="">
        <Logo />
      </div>
      <div className="md:flex items-center mt-2 hidden">
        {menuList?.map((item, index) => (
          <a
            key={index}
            onClick={() => setSelectedItem(item?.name || "")}
            href={item?.link}
            className={` md:mr-1 xl:mr-3 px-[1rem] 2xl:px-[1rem] text-[#2C2F24] py-1 cursor-pointer text-[1rem] md:px-[0.8rem] sm:px-[0.4rem] ${
              selectedItem === item?.name ? "bg-[#e4e6dc] rounded-full" : ""
            }`}
          >
            {item?.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:block">
        <Button className="rounded-full border-[#2C2F24] " variant="bordered">
          Book A Table
        </Button>
      </div>
    </div>
  );
};
