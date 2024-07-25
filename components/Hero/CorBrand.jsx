import { logos } from "@/public/image/logos/logoData";
import Image from "next/image";
const CorBrand = () => {
  return (
    <div className="bg-neutral-100 lg:px-24 mx-auto ">
      <div className="pt-16 flex flex-col md:flex-row md:item-center md:justify-center gap-8 items-center">
        <p className="text-8xl text-white text-stroke-3 font-bold text-center">
          100 Plus
        </p>
        <div className=" md:text-start">
          <h2 className="lg:text-3xl text-2xl tracking-wide font-semibold text-center">
            <span className="border-b-4 pb-1 border-b-yellow-500">
              國際零售品牌
            </span>
            虛實融合首選
          </h2>
          <p className="text-sm font-semibold text-neutral-500 mt-6 px-8 md:px-0 text-center">
            國際品牌 PHILIPS、DIOR、法國嬌蘭、PUMA、Keds、durex、
            <br />
            PHILIPS、DIOR、SKECHERS 等，零售通路如全聯、全家便利商店，都選擇
            91APP。
          </p>
        </div>
      </div>
      {/* Icons */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8 justify-items-center">
        {logos?.map((logo, index) => {
          return (
            <div
              className="zoomEffect duration-100 cursor-pointer"
              key={logo.id}
            >
              <Image src={logo.logo} alt={logo.id + index} width={172} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CorBrand;
