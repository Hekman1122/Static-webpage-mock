"use client";
import { useState } from "react";
import NavList from "./NavList";
import { LuSandwich, LuAlignJustify, LuXSquare } from "react-icons/lu";
import { nanoid } from "nanoid";
const listData = [
  {
    title: "產品價值",
    subtitles: ["D2C動能", "核心產品"],
  },
  {
    title: "方案介紹",
    subtitles: [
      "方案服務總覽",
      "門市企劃方案",
      "APP旗艦方案",
      "門市尊爵方案",
      "跨境電商方案",
    ],
  },
  {
    title: "成功案例",
    subtitles: ["最新案例", "品牌示範"],
  },
  {
    title: "合作夥伴",
    subtitles: ["合作夥伴計畫", "尋找合作夥伴"],
  },
  {
    title: "新聞速報",
    subtitles: ["911焦點", "最新消息"],
  },
  {
    title: "品牌零售",
    subtitles: ["D2C白皮書", "部落格"],
  },
];

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="w-full xl:px-12 px-4 py-3 border-b-2 ">
      <div className="flex justify-between items-center xl:gap-4 gap-2">
        {" "}
        {/* Logo */}
        <div className="flex items-center gap-4">
          <LuSandwich className="bg-[#fdd252] w-14 h-14 p-1 rounded-full text-neutral-700 shadow-sm" />
          <div className=" xl:flex-col text-center font-semibold tracking-wide flex gap-1">
            <span>Grill</span>
            <span>SendWish</span>
          </div>
        </div>
        {/* Nav item */}
        <div className="xl:flex justify-evenly items-center flex-1 hidden">
          {listData.map((item) => {
            return <NavList item={item} key={item.title} />;
          })}
        </div>
        {/* Guide button */}
        <div className="xl:flex justify-center items-center xl:gap-8 hidden">
          <button
            type="button"
            className=" border-neutral-500 border-[2px] rounded-2xl xl:px-6 xl:py-2 px-3 py-2 text-neutral-500 tracking-wide font-semibold hover:border-[#cca01e] hover:text-[#cca01e] duration-200"
          >
            快速了解
          </button>
          <button
            type="button"
            className="  border-[2px] rounded-2xl xl:px-6 xl:py-2 px-3 py-2 bg-neutral-700 text-yellow-400 tracking-wide font-semibold  duration-200 relative hover:bg-neutral-600"
          >
            <div className="absolute right-[-4px] top-[-4px]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
              </span>
            </div>
            專人協助
          </button>
        </div>
        {/* hamburger */}
        <div className="xl:hidden">
          {isShow ? (
            <LuXSquare
              size={20}
              className="cursor-pointer"
              onClick={() => {
                setIsShow((p) => !p);
              }}
            />
          ) : (
            <LuAlignJustify
              size={20}
              className="cursor-pointer"
              onClick={() => {
                setIsShow((p) => !p);
              }}
            />
          )}
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`xl:hidden absolute top-20 border-t-2 border-r-2 md:w-1/2 w-full z-10 bg-white duration-500 ${
          isShow ? "left-0" : "left-[-1000px]"
        }`}
      >
        <div className="xl:hidden flex flex-col gap-2 p-4">
          {listData.map((item) => {
            return (
              <div key={nanoid()}>
                <p className="text-lg font-semibold tracking-wider border-b-2 py-2 border-neutral-400">
                  {item.title}
                </p>
                <div className="p-4 ">
                  {item?.subtitles.map((sub) => {
                    return (
                      <p
                        key={nanoid()}
                        className="font-semibold cursor-pointer text-neutral-500 hover:text-yellow-600 my-2 duration-300"
                      >
                        - {sub}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* button */}
        <div className="p-4 w-full lg:w-3/4 mx-auto">
          <button
            type="button"
            className=" rounded-md xl:px-6 xl:py-2 px-3 py-2 bg-neutral-700 text-yellow-400 tracking-wide font-semibold w-full duration-200 relative hover:bg-neutral-600"
          >
            專人協助
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
