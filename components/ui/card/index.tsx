import { TeaIcon } from "@/components/assets";
import Image from "next/image";

interface Props {
  variant?: "default" | "imaged";
  icon?: React.ReactNode;
  title?: string;
  body?: string;
  image?: string;
  date?: string;
  className?: string;
  imageClassName?: string;
}

export const Card = ({
  variant = "default",
  icon = <TeaIcon />,
  image,
  title,
  body,
  date = "January 3, 2023",
  className,
  imageClassName,
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
        <div className="f-full rounded-xl overflow-hidden shadow-lg">
          <div className="">
            <img className={`w-full ${imageClassName}`} src={image} />
          </div>
          <div className={`p-[25px] ${className}`}>
            <p className="font-medium text-[#737865]">{date}</p>
            <p className="text-xl font-medium text-[#2C2F24] mt-4">{title}</p>
            <p className="font-medium text-[#737865] mt-4">{body}</p>
          </div>
        </div>
      )}
    </>
  );
};
