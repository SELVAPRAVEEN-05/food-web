"use client";

import { Card } from "@/components/ui";
import { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import clock from "@/components/assets/clock.png";
import order from "@/components/assets/order.png";
import profile from "@/components/assets/profile.png";

export default function AboutPage() {
  const [playVideo, setPlayVideo] = useState(false);

  const reviews = [
    {
      title: "The best restaurant",
      body: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      reviewer: {
        name: "Sophie Robson",
        location: "Los Angeles, CA",
        avatar:
          "https://cdn.expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg",
      },
    },
    {
      title: "Simply delicious",
      body: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner.",
      reviewer: {
        name: "Matt Cannon",
        location: "San Diego, CA",
        avatar: "https://www.rottmair.de/profiles/Sebastian_Rottmair.jpg",
      },
    },
    {
      title: "One of a kind restaurant",
      body: "The culinary experience at place is first to none. The atmosphere is vibrant, the food – nothing short of extraordinary.",
      reviewer: {
        name: "Andy Smith",
        location: "San Francisco, CA",
        avatar:
          "https://newprofilepic.photo-cdn.net/assets/images/article/profile.jpg",
      },
    },
  ];

  const features = [
    {
      img: profile,
      title: "Multi Cuisine",
    },
    {
      img: order,
      title: "Easy To Order",
    },
    {
      img: clock,
      title: "Fast Delivery",
    },
  ];

  const info = [
    { value: "3", label: "Locations" },
    { value: "1995", label: "Founded" },
    { value: "65+", label: "Staff Members" },
    { value: "100%", label: "Satisfied Customers" },
  ];

  return (
    <div>
      {/* ================= ABOUT SECTION ================= */}
      <div className="pt-[90px] pb-[120px] md:px-[40px] lg:px-[5rem] xl:px-[7.5rem] bg-[#F9F9F7] grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="relative">
          <img
            src="https://media.post.rvohealth.io/wp-content/uploads/2020/08/6-reasons-why-eggs-are-the-healthiest-food-on-the-planet-732x549-thumbnail-732x549.jpg"
            className="rounded-xl w-full"
            alt="Food"
          />

          <div className="absolute bottom-[-40px] right-4 bg-gray-800 text-white p-8 rounded-xl w-[300px]">
            <p className="text-2xl font-bold mb-6">Come and visit us</p>

            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-xl mr-3" />
                <span>(414) 857 - 0107</span>
              </div>

              <div className="flex items-center">
                <AiFillMessage className="text-xl mr-3" />
                <span>yummy@restaurant.com</span>
              </div>

              <div className="flex">
                <FaLocationDot className="text-xl mr-3 mt-1" />
                <div>
                  <p>837 W. Marshall Lane</p>
                  <p>Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-playfair font-medium text-4xl lg:text-5xl mb-6">
            We provide healthy food for your family.
          </p>

          <p className="text-lg text-[#2C2F24] mb-4">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance.
          </p>

          <p className="text-[#414536]">
            At place, we believe dining is not just about food, but about the
            overall experience.
          </p>
        </div>
      </div>

      {/* ================= VIDEO HERO SECTION ================= */}
      <div className="relative w-full h-[80vh] bg-black">
        {!playVideo ? (
          <>
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
              className="w-full h-full object-cover opacity-70"
              alt="Restaurant"
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
              <button
                onClick={() => setPlayVideo(true)}
                className="mb-6 w-16 h-16 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 22v-20l18 10-18 10z" />
                </svg>
              </button>

              <h1 className="text-white text-3xl md:text-5xl font-playfair">
                Feel the authentic & original taste from us
              </h1>
            </div>
          </>
        ) : (
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/8IuwPb6g5Bg?autoplay=1"
            title="Restaurant Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>

      {/* ================= FEATURES ================= */}
      <div className="py-20 bg-white flex flex-col md:flex-row justify-center items-center gap-10">
        {features.map((item, i) => (
          <div key={i} className="flex gap-4">
            <img
              src={item.img.src}
              alt={item.title}
              className="w-14 h-14 object-contain"
            />

            <div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600 max-w-xs">
                In the new era of technology we look in the future with
                certainty life.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= INFO / STATS SECTION ================= */}
      <div className="bg-[#F9F9F7] py-24 md:px-[40px] lg:px-[5rem] xl:px-[7.5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="font-playfair text-4xl lg:text-5xl mb-6 text-[#2C2F24]">
              A little information for our valuable guest
            </h2>

            <p className="text-[#414536] mb-10 max-w-xl">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 max-w-lg">
              {info.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl py-8 text-center"
                >
                  <p className="text-3xl font-playfair text-[#2C2F24] mb-2">
                    {item.value}
                  </p>
                  <p className="text-[#414536]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="https://www.eatingwell.com/thmb/1izKkqA7wrBEsiZIcHdIZIKtkK0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4518422-8b9bac307f7a4d7fb4379b8c647b806d.jpg"
              alt="Food preparation"
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= REVIEWS ================= */}
      <div className="pt-[90px] pb-[70px] md:px-[40px] lg:px-[5rem] xl:px-[7.5rem]">
        <p className="font-playfair font-medium text-5xl text-center mb-14">
          What Our Customers Say
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} variant="review" {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}
