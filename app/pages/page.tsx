"use client";

import { useRouter } from "next/navigation";
import { menuItems } from "../menu/items";

function Pages() {
  const router = useRouter();

  return (
    <div className="py-20 bg-[#F9F9F7]">
      <h2 className="font-playfair text-6xl font-semibold text-center mb-4">
        Our Blog & Articles
      </h2>

      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
        We consider all the drivers of change gives you the components you need
        to change to create a truly happens.
      </p>

      <div className="md:px-[40px] lg:px-[5rem] xl:px-[7.5rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(`/blogDetails/${item.slug}`)}
            className="bg-white border border-gray-300 rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition-all"
          >
            <img
              src={item.img}
              alt={item.description}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <p className="text-gray-500 text-sm font-semibold mb-1">
                {item.date}
              </p>
              <p className="text-lg font-medium">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pages;
