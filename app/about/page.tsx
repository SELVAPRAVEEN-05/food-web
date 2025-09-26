import { Card } from "@/components/ui";
import { AiFillMessage } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function AboutPage() {
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
      body: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      reviewer: {
        name: "Matt Cannon",
        location: "San Diego, CA",
        avatar: "https://www.rottmair.de/profiles/Sebastian_Rottmair.jpg",
      },
    },
    {
      title: "One of a kind restaurant",
      body: "The culinary experience at place is first to none. The atmosphere is vibrant, the food – nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      reviewer: {
        name: "Andy Smith",
        location: "San Francisco, CA",
        avatar:
          "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
      },
    },
  ];
  return (
    <div>
      <div className="pt-[90px] pb-[120px]  md:px-[40px] lg:px-[5rem] xl:px-[7.5rem]  bg-[#F9F9F7] grid grid-cols-2 lg:gap-[100px] xl:gap-[140px]">
        <div className="relative">
          <img
            src="https://media.post.rvohealth.io/wp-content/uploads/2020/08/6-reasons-why-eggs-are-the-healthiest-food-on-the-planet-732x549-thumbnail-732x549.jpg"
            className="rounded-xl"
          />
          <div className="absolute lg:bottom-0 lg:right-[-60px] xl:bottom-[-50px] right-[-20px] bg-gray-800  text-white p-12 rounded-xl">
            <p className="text-2xl font-bold mb-8">Come and visit us</p>
            <div className="space-y-6">
              {/* Phone number */}
              <div className="flex items-center">
                <div className="text-2xl mr-4">
                  <FaPhone />
                </div>
                <span>(414) 857 - 0107</span>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <div className="text-2xl mr-4">
                  <AiFillMessage />
                </div>
                <span>happytummy@restaurant.com</span>
              </div>

              {/* Address */}
              <div className="flex ">
                <div className="text-2xl mr-4">
                  <FaLocationDot />
                </div>
                <div>
                  <p>837 W. Marshall Lane Marshalltown,</p>
                  <p>IA 50158, Los Angeles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <p className="font-playfair font-medium lg:text-[40px] xl:text-[55px] lg:leading-[3rem] xl:leading-[4.5rem] mb-6">
              We provide healthy food for your family.
            </p>
            <p className="text-lg text-[#2C2F24] ">
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </p>
            <p className="text-[#414536] my-6">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[30px] pt-[90px] pb-[70px]  md:px-[40px] lg:px-[5rem] xl:px-[7.5rem] ">
        <p className="font-playfair font-medium text-[55px] text-center mb-14">
          What Our Customers Say
        </p>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} variant="review" {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}
