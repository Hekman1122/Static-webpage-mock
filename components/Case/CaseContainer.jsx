import { nanoid } from "nanoid";
import Case from "./Case";
const caseData = [
  {
    title: "妮娜巧克力",
    bgColor: "white",
    subtitle:
      "業績年成長如何突破400%？【妮娜巧克力】在埔里蓋城堡，用「想像、風味、歡樂」品牌策略，打造巧克力王國",
  },
  {
    title: "Dr.CARE 凱兒生技",
    bgColor: "black",
    subtitle:
      "「韓國人都用91APP做官網了，為何台灣人還不跟上呢？」保養品牌Dr.CARE新品牌快速上架，3個月即業績破百萬",
  },
  {
    title: "鑫耀生技",
    bgColor: "white",
    subtitle:
      "小眾市場如何年成長200%？【鑫耀生技】為台灣首支專為嬰幼兒設計營養補給品牌，電商業績年成長翻倍",
  },
];
const CaseContainer = () => {
  return (
    <div className="w-full mt-16 pb-8">
      <h2 className="text-3xl font-semibold tracking-wider text-center">
        最新案例
      </h2>
      <div className="grid grid-cols-3 place-content-center gap-16 max-w-6xl mx-auto mt-8">
        {caseData.map((item) => {
          return <Case key={nanoid()} {...item} />;
        })}
      </div>
      <div className="text-xl font-semibold tracking-wider text-center mt-8 py-4">
        <span className="py-1 border-b-2 border-yellow-500">
          查看更多最新案例
        </span>
      </div>
    </div>
  );
};

export default CaseContainer;
