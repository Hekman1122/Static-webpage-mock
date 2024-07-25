import { nanoid } from "nanoid";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
const footerData = [
  {
    title: "產品功能",
    subtitle: ["功能列表", "產品更新紀錄"],
  },
  {
    title: "方案介紹",
    subtitle: [
      "APP 旗艦方案",
      "門市企業方案",
      "OMO 旗艦方案",
      "360 品牌數位代營運",
    ],
  },
  {
    title: "服務與功能",
    subtitle: [
      "91APP 品牌新零售學院",
      "商店經營 Q&A",
      "91APP API 開發者專區",
      "91APP 策略合作夥伴計畫",
    ],
  },
  {
    title: "了解更多",
    subtitle: [
      "關於我們",
      "人才招募",
      "合作品牌",
      "新聞中心",
      "信託銀行揭露事項",
      "金流服務條款",
    ],
  },
];
const Footer = () => {
  return (
    <div className="bg-neutral-800 text-neutral-100 mt-16 w-full">
      <div className="grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-content-center p-8">
        {footerData?.map((item) => {
          return (
            <div className="flex flex-col gap-3 p-4" key={nanoid()}>
              <h2 className="text-xl font-semibold ">{item.title}</h2>
              {item.subtitle.map((list) => {
                return (
                  <p
                    key={nanoid()}
                    className="font-semibold text-neutral-300 hover:text-neutral-200 duration-300 cursor-pointer"
                  >
                    {list}
                  </p>
                );
              })}
            </div>
          );
        })}
        <div className="p-4">
          <h2 className="text-xl font-semibold" contentEditable="true">
            聯絡我們
          </h2>
          <div className="flex gap-4 mt-3">
            <AiFillFacebook
              size={22}
              className="cursor-pointer text-neutral-300 hover:text-neutral-200 duration-200"
            />{" "}
            <AiFillInstagram
              size={22}
              className="cursor-pointer text-neutral-300 hover:text-neutral-200 duration-200"
            />{" "}
            <AiOutlineLinkedin
              size={22}
              className="cursor-pointer text-neutral-300 hover:text-neutral-200 duration-200"
            />
            <AiOutlineYoutube
              size={22}
              className="cursor-pointer text-neutral-300 hover:text-neutral-200 duration-200"
            />{" "}
            <AiOutlineTwitter
              size={22}
              className="cursor-pointer text-neutral-300 hover:text-neutral-200 duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
