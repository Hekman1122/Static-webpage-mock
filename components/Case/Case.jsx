import { BsArrowRightCircle } from "react-icons/bs";

const Case = ({ title, bgColor, subtitle }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg shadow-md overflow-hidden">
      <div className="w-full bg-neutral-300 h-60"></div>
      <div
        className={`${
          bgColor === "black" ? "bg-neutral-700 text-neutral-100" : ""
        }`}
      >
        <div className="border-b-2 pb-2 relative px-2">
          <h2 className="text-2xl font-semibold tracking-wide">{title}</h2>
          <div className="absolute w-28 h-28 rounded-md shadow-sm bg-yellow-200 right-2 bottom-2"></div>
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
            className="group-hover:translate-x-3 duration-200 "
          />
        </div>
      </div>
    </div>
  );
};

export default Case;
