"use client";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoReorderThree, IoClose } from "react-icons/io5";
import { Logo } from "../../assets";

export const TopBar = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const menuList = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Menu", link: "/menu" },
    { name: "Pages", link: "/pages" },
    { name: "Contact", link: "/contact" },
  ];

  const handleNavigation = (item: { name: string; link: string }) => {
    setSelectedItem(item.name);
    router.push(item.link);
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <div className="w-full relative">
      {/* Top Bar */}
      <div className="flex items-center justify-between py-3 px-4 md:px-[40px] lg:px-[5rem] xl:px-[7.5rem]">
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <IoClose
              size={28}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <IoReorderThree
              size={28}
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* Logo */}
        <div >
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          {menuList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(item)}
              className={`mr-2 xl:mr-4 px-4 py-1 cursor-pointer text-[1rem] text-[#2C2F24] ${
                selectedItem === item.name
                  ? "bg-[#e4e6dc] rounded-full"
                  : ""
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button
            className="rounded-full border-[#2C2F24]"
            variant="bordered"
            onPress={() => router.push("/book")}
          >
            Book A Table
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 z-50">
          {menuList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(item)}
              className="w-full text-center py-3 text-[#2C2F24] hover:bg-[#e4e6dc] cursor-pointer"
            >
              {item.name}
            </div>
          ))}

          <Button
            className="mt-3 rounded-full border-[#2C2F24]"
            variant="bordered"
            onPress={() => {
              router.push("/book");
              setIsOpen(false);
            }}
          >
            Book A Table
          </Button>
        </div>
      )}
    </div>
  );
};
