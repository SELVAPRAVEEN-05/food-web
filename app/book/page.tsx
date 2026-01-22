"use client";

import { useState } from "react";

function Book() {
  const timeSlots = [
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
  ];

  const [date, setDate] = useState("");
  const [time, setTime] = useState(timeSlots[3]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [totalPerson, setTotalPerson] = useState(1);

  const persons = [1, 2, 3, 4, 5, 6];
  return (
    <div className="pt-20 bg-[#F9F9F7] ">
      {/* TITLE */}
      <h2 className="font-playfair text-6xl font-bold text-center mb-4">
        Book A Table
      </h2>

      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
        We consider all the drivers of change gives you the components you need
        to change to create a truly happens.
      </p>

      <div className="relative mt-80">
        <div className="bg-white max-w-2xl rounded-2xl absolute -top-60 p-8 left-[32%] shadow-lg">
          <form className="space-y-6 ">
            {/* DATE & TIME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Time</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full border rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-red-500"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* NAME & PHONE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="x-xxx-xxx-xxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* TOTAL PERSON */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Total Person
              </label>
              <select
                value={totalPerson}
                onChange={(e) => setTotalPerson(Number(e.target.value))}
                className="w-full border rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-red-500"
              >
                {persons.map((p) => (
                  <option key={p} value={p}>
                    {p} Person{p > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#AD343E] text-white rounded-full py-4 font-semibold hover:bg-red-700 transition"
            >
              Book A Table
            </button>
          </form>
        </div>
        <img
          src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg"
          alt="dots pattern"
          className="w-full h-[80%]"
        />
      </div>
    </div>
  );
}

export default Book;
