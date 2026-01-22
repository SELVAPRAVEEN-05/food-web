"use client";

import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="py-20 bg-[#F9F9F7] ">
      {/* TITLE */}
      <h2 className="font-playfair text-6xl font-semibold text-center mb-4">
        Contact Us
      </h2>

      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
        We consider all the drivers of change gives you the components you need
        to change to create a truly happens.
      </p>

      <div className="max-w-2xl mx-auto">
        <form className="space-y-6 bg-white rounded-2xl p-8 shadow-lg">
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

          {/* Subject*/}
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              placeholder="Write your subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              placeholder="Write your message"
              value={message}
              rows={3}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded-lg px-5 py-3 outline-none focus:ring-2 focus:ring-red-500 resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#AD343E] text-white rounded-full py-4 font-semibold hover:bg-red-700 transition"
          >
            Book A Table
          </button>
        </form>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {/* CALL US */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Call Us:</p>
            <p className="text-[#AD343E] font-semibold text-lg">
              +1-234-567-8900
            </p>
          </div>

          {/* HOURS */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Hours:</p>
            <p className="text-gray-600 text-sm">
              Mon-Fri: 11am – 8pm
              <br />
              Sat, Sun: 9am – 10pm
            </p>
          </div>

          {/* LOCATION */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Our Location:
            </p>
            <p className="text-gray-600 text-sm">
              123 Bridge Street
              <br />
              Nowhere Land, LA 12345
              <br />
              United States
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
