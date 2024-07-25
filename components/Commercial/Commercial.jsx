import SeparateCard from "./SeparateCard";
import { nanoid } from "nanoid";
const CardData = [
  {
    title: "Commerce Cloud",
    left: true,
    subtitle: "一站式品牌電商營運管理",
    functionList: [
      "購物官網",
      "品牌 App",
      "金物流管理",
      "多元行銷促購",
      " 營運分析洞察",
      "跨境電商",
    ],
    wrap: true,
  },
  {
    title: "Marketing Cloud",
    left: false,
    subtitle: "數據驅動 會員關係升級",
    functionList: [
      "會員經營健康度指標",
      "數位媒體導流",
      "用戶分群和個人化行銷",
      "會員制度設定",
      " CRM 會員歷程管理",
    ],
    wrap: true,
  },
  {
    title: "OMO Cloud",
    subtitle: "虛實通路融合",
    left: true,
    functionList: [
      "門市會員經營",
      " 門市店員促購工具",
      "分店 OMO 執行統計",
      "跨通路績效管理",
    ],
    wrap: false,
  },
  {
    title: "OMNI",
    subtitle: "零售成長引擎",
    left: false,
    functionList: [
      "整合系統，打造零售數據中心",
      "驅動 Commerce Cloud，提升電商營運效率",
      " 驅動 Marketing Cloud，提升銷售轉換和顧客關係",
      " 驅動 OMO Cloud，提高門市銷售、優化顧客體驗",
      "擴充外部應用，滿足品牌轉型需求",
    ],
    wrap: false,
  },
];
const Commercial = () => {
  return (
    <div className="w-full mt-16 max-w-5xl mx-auto">
      <h2 className="text-center text-3xl font-semibold">
        <p className="mb-2">D2C品牌商務解決方案</p>
        全方位支援品牌電商與OMO數位轉型
      </h2>
      <div className="mt-12">
        {CardData?.map((item) => {
          return <SeparateCard {...item} key={nanoid} />;
        })}
      </div>
    </div>
  );
};

export default Commercial;
