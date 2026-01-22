"use client";

function Pages() {
  const menuItems = [
    {
      id: 1,
      date: "January 15, 2024",
      discription: "How to create a simple and delicious breakfast",
      img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    },
    {
      id: 2,
      date: "February 10, 2024",
      discription: "5 Best Main Dishes for Family Dinner",
      img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
    },
    {
      id: 3,
      date: "March 5, 2024",
      discription: "Refreshing Drink Recipes for Summer",
      img: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
    },
    {
      id: 4,
      date: "April 20, 2024",
      discription: "Decadent Dessert Ideas to Satisfy Your Sweet Tooth",
      img: "https://media.istockphoto.com/id/1326149453/photo/dark-chocolate-cake-slice.jpg?s=612x612&w=0&k=20&c=KaZDGCl6ROSRiQfXNUd_AinfvWlv8K5bvPBSqPUXJfA=",
    },
    {
      id: 5,
      date: "May 18, 2024",
      discription: "Healthy and Delicious Mint Lemonade Recipe",
      img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
    },
    {
      id: 6,
      date: "June 12, 2024",
      discription: "How to Make Creamy Chocolate Ice Cream at Home",
      img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
    },
    {
      id: 7,
      date: "July 8, 2024",
      discription: "The Ultimate Guide to Making the Perfect Cheese Burger",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
    {
      id: 8,
      date: "August 25, 2024",
      discription: "Crispy Classic Waffles for Breakfast Lovers",
      img: "https://images.unsplash.com/photo-1508739826987-b79cd8b7da12",
    },
  ];
  return (
    <div className="py-20 bg-[#F9F9F7] ">
      {/* TITLE */}
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
            className="bg-white border border-gray-300 rounded-xl shadow-sm overflow-hidden"
          >
            <img src={item.img} className="h-48 w-full object-cover" />

            <div className="p-5">
              <p className="text-gray-500 text-sm font-semibold mb-1">
                {item.date}
              </p>
              <p className="text-lg">{item.discription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pages;
