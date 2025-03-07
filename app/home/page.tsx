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
              <Card icon={item.icon} title={item.title} body={item.body} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[90px] pt-[90px] pb-[120px]  px-[7.5rem] bg-[#F9F9F7]">
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
          {/* Featured Article */}
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

          {/* Regular Articles */}
          <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-6">
            {articles.slice(1).map((article) => (
              <div key={article.id}>
                <Card
                  className="pt-4 pb-0 px-4"
                  imageClassName="h-[200px]"
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
