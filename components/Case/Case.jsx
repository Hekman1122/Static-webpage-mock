import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";

const Case = ({ title, bgColor, subtitle, imageUrl }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-md overflow-hidden w-full sm:w-2/3 md:w-full">
      <div className="w-full h-60 flex justify-center items-center">
        <Image
          src={imageUrl}
          alt={title}
          width={360}
          height={360}
          className="h-full w-full"
        />
      </div>
      <div
        className={`${
          bgColor === "black" ? "bg-neutral-700 text-neutral-100" : ""
        } px-4 md:px-0`}
      >
        <div className="border-b-2 py-4 relative px-2">
          <h2 className="text-2xl font-semibold tracking-wide">{title}</h2>
        </div>
        <div
          className={`py-4 font-semibold px-2 ${
            bgColor === "black" ? "text-slate-200" : "text-neutral-500"
          }`}
        >
          {subtitle}
        </div>

        <div className="flex items-center gap-4 cursor-pointer group place-content-end p-4">
          <p className="font-semibold text-lg group-hover:opacity-90">
            了解更多
          </p>
          <BsArrowRightCircle
            size={20}
            className="group-hover:translate-x-1 duration-300 "
          />
        </div>
      </div>
    </div>
  );
};

export default Case;
