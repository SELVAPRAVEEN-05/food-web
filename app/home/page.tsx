import React from "react";
import logo from "@/components/assets/bg (1).svg";
import { Button } from "@heroui/button";
import Image from "next/image";
import { Card } from "@/components/ui";
import { AiFillMessage } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { HiMiniReceiptPercent } from "react-icons/hi2";
import { IoMdCart } from "react-icons/io";
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

  const articles = [
    {
      id: 1,
      title:
        "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
      body: "Lorem ipsum dolor sit amet consectetur of a adipiscing elitlimim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
      date: "January 3, 2023",
      image: "https://media.timeout.com/images/105940299/image.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "How to prepare the perfect french fries in an air fryer",
      date: "January 3, 2023",
      image:
        "https://www.tastingtable.com/img/gallery/the-tell-tale-signs-your-homemade-french-fries-are-cooked-to-perfection/intro-1733436527.jpg",
    },
    {
      id: 3,
      title: "How to prepare delicious chicken tenders",
      date: "January 3, 2023",
      image:
        "https://popmenucloud.com/cdn-cgi/image/width=1200,height=630,format=auto,fit=cover/dfknpjhw/665182c9-2e0c-4c07-bb59-725e13b50741.jpg",
    },
    {
      id: 4,
      title: "7 delicious cheesecake recipes you can prepare",
      date: "January 3, 2023",
      image:
        "https://i.pinimg.com/originals/92/cd/79/92cd79eed3778f9595168c5f3f9b3938.jpg",
    },
    {
      id: 5,
      title: "5 great pizza restaurants you should visit this city",
      date: "January 3, 2023",
      image:
        "https://wheredmysanitygo.com/wp-content/uploads/2023/02/shutterstock_225746563-e1677600150420.jpg",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Caterings",
      image:
        "https://imgmediagumlet.lbb.in/media/2023/10/651e6d1879450a739e537274_1696492824471.jpg",
      description:
        "In the new era of technology we look in the future with certainty for life.",
    },
    {
      id: 2,
      title: "Birthdays",
      image:
        "https://m.media-amazon.com/images/I/71+9OWQo2NL._AC_UF1000,1000_QL80_.jpg",
      description:
        "In the new era of technology we look in the future with certainty for life.",
    },
    {
      id: 3,
      title: "Weddings",
      image:
        "https://m.media-amazon.com/images/I/71S-pX2TThL._AC_UF894,1000_QL80_.jpg",
      description:
        "In the new era of technology we look in the future with certainty for life.",
    },
    {
      id: 4,
      title: "Events",
      image:
        "https://www.johnbraycornishholidays.co.uk/blog/wp-content/uploads/sites/18/2022/03/Friends-around-a-table-in-a-restaurant-eating-together.jpg",
      description:
        "In the new era of technology we look in the future with certainty for life.",
    },
  ];

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

  const features = [
    { icon: <FaClock />, text: "Delivery within 30 minutes" },
    { icon: <HiMiniReceiptPercent />, text: "Best Offer & Prices" },
    { icon: <IoMdCart />, text: "Online Services Available" },
  ];

  return (
    <div>
      {/* it is intro bg */}
      <div className="relative">
        <Image src={logo} alt="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="xl:text-[90px] lg:text-[70px] md:text-[60px] md:w-[450px] xl:w-[600px] lg:w-[500px] font-playfair  text-[#2C2F24] leading-none">
            Best food for your taste
          </p>
          <p className="max-w-sm text-md font-mono lg:mt-4 md:mt-3">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
          <div className="mt-4 lg:flex gap-4 hidden">
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

          <div className="mt-4 flex gap-4  lg:hidden">
            <Button
              size="md"
              variant="solid"
              color="danger"
              className="rounded-full bg-[#AD343E] "
            >
              Book A Table
            </Button>
            <Button
              size="md"
              variant="bordered"
              className="rounded-full border-[#2C2F24]"
            >
              Explore Menu
            </Button>
          </div>
        </div>
      </div>

      {/* it is explore */}
      <div className="mt-[90px] md:px-[40px] lg:px-[5rem] xl:px-[7.5rem]  ">
        <p className="text-center font-playfair font-medium text-[55px]">
          Browse Our Menu
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 mb-[120px]">
          {cardData.map((item, index) => (
            <div key={index} className="col-span-1">
              <Card icon={item.icon} title={item.title} body={item.body} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[90px] pt-[90px] pb-[120px]  md:px-[40px] lg:px-[5rem] xl:px-[7.5rem]  bg-[#F9F9F7] grid grid-cols-2 lg:gap-[100px] xl:gap-[140px]">
        <div className="relative">
          <img src="https://www.fitntasty.ch/wp-content/uploads/2022/04/wrap-legumes-poulet.jpg" />
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
            <Button
              size="lg"
              className="rounded-full border-[#2C2F24]"
              variant="bordered"
            >
              More About Us
            </Button>
          </div>
        </div>
      </div>

      {/* types */}
      <div className="mt-[50px] pt-[70px] pb-[70px]  md:px-[40px] lg:px-[5rem] xl:px-[7.5rem] ">
        <p className="font-playfair font-medium text-[55px] max-w-[600px] leading-[4rem] mb-14">
          We also offer unique services for your events
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col">
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[70px] pt-[90px] pb-[120px]  md:px-[40px] lg:px-[5rem] xl:px-[7.5rem]  bg-[#F9F9F7] grid grid-cols-12 gap-6">
        <div className="grid grid-cols-12 col-span-7 gap-6">
          <div className="md:col-span-7 h-[635px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1673830185949-f64586bd8860?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw="
              alt="Chef preparing food"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="col-span-4">
            <div className="xl:my-[35px] lg:my-[25px]">
              <img
                src="https://api.cloudly.space/resize/crop/1200/627/60/aHR0cHM6Ly9zdGF0aWMuYXBpZGFlLXRvdXJpc21lLmNvbS9maWxlc3RvcmUvb2JqZXRzLXRvdXJpc3RpcXVlcy9pbWFnZXMvMTg0LzEwMy85MDA0OTg0LmpwZw==/image.jpg"
                alt="Bowl of shrimp pasta"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="">
              <img
                src="https://scontent-tir3-1.xx.fbcdn.net/v/t39.30808-6/480327763_929529489351444_8382520552722508766_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9g_4MK91NNoQ7kNvgHvqTbL&_nc_zt=23&_nc_ht=scontent-tir3-1.xx&_nc_gid=AOo2XQRHH7Xk6DrpIAEOvv4&oh=00_AYHTasaNYaAh3mM4nGdxE1M45KJw81r3W7Tfm_qLniRaaA&oe=67D48C5C"
                alt="Grilled chicken with sauce"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="block xl:hidden mt-[20px]">
              <img
                src="https://i.pinimg.com/564x/a6/93/9a/a6939ab9e884b3da3fd54b590bc23b54.jpg"
                alt="Grilled chicken with sauce"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="flex flex-col justify-center col-span-5">
          <p className="font-playfair font-medium lg:text-[45px] xl:text-[55px]  lg:leading-[3rem] xl:leading-[4.5rem] mb-5">
            Fastest Food Delivery in City
          </p>

          <p className="text-[#414536]">
            Our visual designer lets you quickly and drag a down your way to
            customappps for both keep desktops.
          </p>

          <div className="space-y-4 mt-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-[#AD343E] rounded-full w-8 h-8 flex items-center justify-center text-white mr-4">
                  {feature.icon}
                </div>
                <span className="font-medium text-xl">{feature.text}</span>
              </div>
            ))}
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

      <div className="mt-[90px] pt-[90px] pb-[120px]  md:px-[40px] lg:px-[5rem] xl:px-[7.5rem]  bg-[#F9F9F7]">
        <div className="flex mb-16 items-center justify-between">
          <p className="font-playfair font-medium text-[55px]">
            Our Blog & Articles
          </p>
          <Button
            size="lg"
            variant="solid"
            color="danger"
            className="rounded-full bg-[#AD343E] "
          >
            Read All Articles
          </Button>
        </div>
        <div className=" grid grid-cols-12 gap-6 ">
          <div className="col-span-12 md:col-span-6">
            <Card
              variant="imaged"
              imageClassName="h-[450px]"
              title={articles[0].title}
              body={articles[0].body}
              date={articles[0].date}
              image={articles[0].image}
            />
          </div>

          <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-6">
            {articles.slice(1).map((article) => (
              <div key={article.id}>
                <Card
                  className="lg:pt-2 xl:pt-4 pb-0 px-4"
                  imageClassName="lg:h-[180px] xl:h-[200px]"
                  variant="imaged"
                  title={article.title}
                  date={article.date}
                  image={article.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
