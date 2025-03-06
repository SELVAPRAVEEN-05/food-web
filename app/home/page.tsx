import React from "react";
import logo from "@/components/assets/bg (1).svg";
import { Button } from "@heroui/button";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="relative">
        <Image src={logo} alt="" />
      </div>
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
  );
}
