import Image from "next/image";
import photo from "@/public/image/360.png";
import Card from "./Card";
import icon_01 from "@/public/image/icons/icon_01.png";
import icon_02 from "@/public/image/icons/icon_02.png";
import icon_03 from "@/public/image/icons/icon_03.png";
import icon_04 from "@/public/image/icons/icon_04.png";
import icon_05 from "@/public/image/icons/icon_05.png";
import icon_06 from "@/public/image/icons/icon_06.png";
import { nanoid } from "nanoid";
const iconData = [
  { title: "品牌 OMO 顧問", pic: icon_01 },
  { title: "網站代營運", pic: icon_02 },
  { title: "電商平台代營運", pic: icon_03 },
  { title: "廣告代操", pic: icon_04 },
  { title: "CRM 數據分析", pic: icon_05 },
  { title: "金物流客服代營運", pic: icon_06 },
];
const Brand = () => {
  return (
    <div className="bg-neutral-100 w-full py-12 mt-8">
      <div className="w-3/4 mx-auto ">
        <div className="flex items-center justify-center gap-2">
          <Image src={photo} alt="360" width={80} />
          <p className="text-3xl font-semibold">品牌數位代營運</p>
        </div>
        <p className="text-center text-neutral-500 font-semibold text-lg mt-2">
          品牌數位營運大小事，360 品牌數位代營運通通搞定
        </p>
      </div>

      {/* card list */}
      <div className="flex flex-wrap items-center justify-center gap-4 py-8">
        {iconData.map((item) => {
          return <Card icon={item.pic} title={item.title} key={nanoid()} />;
        })}
      </div>
      <div className="text-center mt-6">
        <span className="text-xl font-semibold cursor-pointer py-2 group text-neutral-600 text-center mt-6 relative">
          看 360 品牌數位代營運介紹
          <span className="w-0 h-[2px] group-hover:w-full bg-yellow-500 absolute bottom-1 left-0 duration-500"></span>
        </span>
      </div>
    </div>
  );
};

export default Brand;
