import { TeaIcon } from "@/components/assets";
import Image from "next/image";

interface Props {
  variant?: "default" | "imaged";
  icon?: React.ReactNode;
  title?: string;
  body?: string;
  image?: string;
  date?: string;
}

export const Card = ({
  variant = "default",
  icon = <TeaIcon />,
  image = "",
  title = "",
  body = "",
  date = "",
}: Props) => {
  return (
    <>
      {variant === "default" ? (
        <div className="border border-[#DBDFD0] rounded-xl p-[35px] flex flex-col items-center mb-1">
          <div>{icon}</div>
          <p className="mt-[30px] mb-4 font-bold text-2xl">{title}</p>
          <p className="text-center text-[#414536] mb-[30px]">{body}</p>
          <div className="cursor-pointer text-[#AD343E] font-bold">
            Explore Menu
          </div>
        </div>
      ) : (
        <div className="f-full rounded-xl overflow-hidden shadow-md">
          <div className="">
            <Image src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe-500x500.jpg" alt="" />
          </div>
        </div>
      )}
    </>
  );
};
