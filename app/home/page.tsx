import React from "react";
import logo from "@/components/assets/bg (1).svg";
import { Button } from "@heroui/button";
import Image from "next/image";
import { Card } from "@/components/ui";
import {
  CakeIcon,
  DrinksIcon,
  MaindishIcon,
  TeaIcon,
} from "@/components/assets";
export default function Home() {
  const cardData = [
    {
      icon: <TeaIcon />,
      title: "Breakfast",
      body: "In the new era of technology we look in the future with certainty and pride for our life.",
    },
    {
      icon: <MaindishIcon />,
      title: "Main Dishes",
      body: "In the new era of technology we look in the future with certainty and pride for our life.",
    },
    {
      icon: <DrinksIcon />,
      title: "Drinks",
      body: "In the new era of technology we look in the future with certainty and pride for our life.",
    },
    {
      icon: <CakeIcon />,
      title: "Desserts",
      body: "In the new era of technology we look in the future with certainty and pride for our life.",
    },
  ];

  return (
    <div>
      {/* it is intro bg */}
      <div className="relative">
        <Image src={logo} alt="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-[90px] w-[600px] font-playfair  text-[#2C2F24] leading-none">
            Best food for your taste
          </p>
          <p className="max-w-sm text-md font-mono ">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
          <div className="mt-4 flex gap-4">
            <Button
              size="lg"
              variant="solid"
              color="danger"
              className="rounded-full bg-[#AD343E] "
            >
              Book A Table
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="rounded-full border-[#2C2F24]"
            >
              Explore Menu
            </Button>
          </div>
        </div>
      </div>

      {/* it is explore */}
      <div className="mt-[90px] px-[7.5rem] ">
        <p className="text-center font-playfair font-medium text-[55px]">
          Browse Our Menu
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 mb-[120px]">
          {cardData.map((item, index) => (
            <div key={index} className="col-span-1">
              <Card variant="imaged" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
