import { TeaIcon } from "@/components/assets";
import Image from "next/image";

interface Props {
  variant?: "default" | "imaged" | "review";
  icon?: React.ReactNode;
  title?: string;
  body?: string;
  image?: string;
  date?: string;
  reviewer?: {
    name: string;
    location: string;
    avatar: string;
  };
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
  reviewer,
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
      ) : variant === "imaged" ? (
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <img
            className={`w-full ${imageClassName}`}
            src={image}
            alt="Card image"
          />
          <div className={`p-[25px] ${className}`}>
            <p className="font-medium text-[#737865]">{date}</p>
            <p className="text-xl font-medium text-[#2C2F24] mt-4">{title}</p>
            <p className="font-medium text-[#737865] mt-4">{body}</p>
          </div>
        </div>
      ) : (
        <div className="bg-[#F9F9F7] rounded-xl p-9 shadow-md w-full max-w-md">
          <p className="text-2xl font-bold text-[#AD343E]">
            <span className="italic">"</span>
            {title}
            <span className="italic">"</span>
          </p>
          <p className="text-[#414536] mt-3">{body}</p>
          <hr className="my-4 border-[#DBDFD0]" />
          {reviewer && (
            <div className="flex items-center mt-4">
              <img
                src={reviewer.avatar}
                alt={reviewer.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="font-bold text-[#2C2F24]">{reviewer.name}</p>
                <p className="text-[#737865] text-sm">{reviewer.location}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
