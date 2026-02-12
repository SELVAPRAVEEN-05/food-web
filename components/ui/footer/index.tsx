import { LogoWhite } from "@/components/assets";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const pages = [
  "Home",
  "About",
  "Menu",
  "Pricing",
  "Blog",
  "Contact",
  "Delivery",
];

const utilityPages = [
  "Start Here",
  "Styleguide",
  "Password Protected",
  "404 Not Found",
  "Licenses",
  "Changelog",
  "View More",
];

const instagramImages = [
  "https://anitalianinmykitchen.com/wp-content/uploads/2022/03/strawberry-cupcakes-sq-1-of-1.jpg",
  "https://cdn.bhdw.net/im/stack-of-pancakes-top-with-fruits-and-maple-syrup-in-a-plate-wallpaper-60497_w635.webp",
  "https://upload.wikimedia.org/wikipedia/commons/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
  "https://www.pamperedchef.com/iceberg/com/recipe/39350-lg.jpg",
];

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-14 pb-8 px-6 sm:px-10 lg:px-[5rem] xl:px-[7.5rem]">
      
      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <div className="mb-6">
            <LogoWhite />
          </div>

          <p className="text-sm text-gray-300 max-w-[280px] leading-relaxed">
            In the new era of technology, we look into the future with certainty
            and pride for our company.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-red-500 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold mb-5 text-lg">Pages</h3>
          <ul className="space-y-3">
            {pages.map((page) => (
              <li key={page}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <h3 className="font-semibold mb-5 text-lg">Utility Pages</h3>
          <ul className="space-y-3">
            {utilityPages.map((page) => (
              <li key={page}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h3 className="font-semibold mb-5 text-lg">
            Follow Us On Instagram
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {instagramImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Instagram food"
                className="w-full h-24 sm:h-28 object-cover rounded-xl hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-14 pt-6 border-t border-gray-700">
        <p className="text-xs sm:text-sm text-gray-400">
          Copyright © 2023 Hashtag Developer. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
