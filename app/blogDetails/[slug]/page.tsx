import { menuItems } from "@/app/menu/items";
import { notFound } from "next/navigation";


export default async function BlogDetails({ params }: any) {
  const article = menuItems.find((item) => item.slug === params.slug);

  if (!article) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-gray-500 mb-2">{article.date}</p>

      <h1 className="font-playfair text-4xl font-semibold mb-6">
        {article.description}
      </h1>

      <img
        src={article.img}
        alt={article.description}
        className="w-full h-[420px] object-cover rounded-xl mb-8"
      />

      <p className="text-gray-700 leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </p>
    </div>
  );
}
