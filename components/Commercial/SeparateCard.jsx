import { nanoid } from "nanoid";
import { BsCheck2Square, BsArrowRightCircle } from "react-icons/bs";
const SeparateCard = ({ left, title, subtitle, functionList, wrap }) => {
  return (
    <div className="grid md:grid-cols-2 mt-4 gap-4 md:gap-2 px-3">
      {/* 圖片 */}
      <div
        className={`w-full h-[360px] rounded-md  shadow-md bg-slate-300 ${
          left ? "md:order-first" : "md:order-last"
        }`}
      >
        圖片
      </div>
      {/* 文字列表 */}
      <div className="px-6 py-3 w-full">
        <h2 className="font-semibold tracking-wide text-3xl mb-4"> {title}</h2>
        <h3 className="font-semibold tracking-wide text-xl text-neutral-600">
          {subtitle}
        </h3>
        <div
          className={`w-full grid gap-4 px-2 mt-6 ${
            wrap ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {functionList?.map((item) => {
            return (
              <div key={nanoid()} className="flex gap-2 items-center">
                <BsCheck2Square className="text-yellow-600" />
                <p className="font-semibold text-neutral-500 text-lg">
                  {" "}
                  {item}
                </p>
              </div>
            );
          })}
        </div>
        {/* 了解更多 */}
        <div className="flex items-center gap-4 mt-12 cursor-pointer group">
          <p className="font-semibold text-lg group-hover:opacity-90">
            了解更多
          </p>
          <BsArrowRightCircle
            size={20}
            className="group-hover:translate-x-3 duration-200 text-yellow-600"
          />
        </div>
      </div>
    </div>
  );
};

export default SeparateCard;
