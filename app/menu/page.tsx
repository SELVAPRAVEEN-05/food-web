"use client";

import React, { useState } from "react";

const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];

const menuItems = [
  {
    id: 1,
    title: "Fried Eggs",
    price: "$9.99",
    category: "Breakfast",
    img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
  },
  {
    id: 2,
    title: "Hawaiian Pizza",
    price: "$15.99",
    category: "Main Dishes",
    img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
  },
  {
    id: 3,
    title: "Martinez Cocktail",
    price: "$7.25",
    category: "Drinks",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
  },
  {
    id: 4,
    title: "Butterscotch Cake",
    price: "$20.99",
    category: "Desserts",
    img: "https://media.istockphoto.com/id/1326149453/photo/dark-chocolate-cake-slice.jpg?s=612x612&w=0&k=20&c=KaZDGCl6ROSRiQfXNUd_AinfvWlv8K5bvPBSqPUXJfA=",
  },
  {
    id: 5,
    title: "Mint Lemonade",
    price: "$5.89",
    category: "Drinks",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
  },
  {
    id: 6,
    title: "Chocolate Icecream",
    price: "$18.05",
    category: "Desserts",
    img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
  },
  {
    id: 7,
    title: "Cheese Burger",
    price: "$12.55",
    category: "Main Dishes",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    id: 8,
    title: "Classic Waffles",
    price: "$12.99",
    category: "Breakfast",
    img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d",
  },
];

function Menu() {
  const [active, setActive] = useState("All");

  const filteredItems =
    active === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <section className="py-24 bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="font-playfair text-5xl text-center mb-4">
          Our Menu
        </h2>

        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full border transition ${
                active === cat
                  ? "bg-[#AD343E] text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-red-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-300 rounded-xl shadow-sm overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5 text-center">
                <p className="text-[#AD343E] font-semibold mb-1">
                  {item.price}
                </p>
                <h3 className="font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  Made with eggs, lettuce, salt, oil and other ingredients.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ORDER APPS */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-playfair text-4xl mb-4">
              You can order through apps
            </h3>
            <p className="text-gray-600 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim
              bibendum sed et aliquet aliquet risus tempor semper.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "Uber Eats",
              "Grubhub",
              "Postmates",
              "DoorDash",
              "Foodpanda",
              "Deliveroo",
              "Instacart",
              "Just Eat",
              "DiDi Food",
            ].map((app) => (
              <div
                key={app}
                className="bg-white border rounded-lg py-3 text-center font-medium"
              >
                {app}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
